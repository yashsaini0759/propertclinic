import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dir = path.join(__dirname, 'public', 'images');

const formatBytes = (bytes) => (bytes / 1024 / 1024).toFixed(2) + ' MB';

async function processDir(currentDir) {
    const files = fs.readdirSync(currentDir);
    let totalSaved = 0;
    
    for (const file of files) {
        const fullPath = path.join(currentDir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            totalSaved += await processDir(fullPath);
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
                try {
                    const originalSize = fs.statSync(fullPath).size;
                    const tempPath = fullPath + '.tmp' + ext;
                    
                    if (ext === '.png') {
                        await sharp(fullPath).png({ quality: 80, compressionLevel: 8 }).toFile(tempPath);
                    } else if (ext === '.webp') {
                        await sharp(fullPath).webp({ quality: 80 }).toFile(tempPath);
                    } else {
                        await sharp(fullPath).jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
                    }
                    
                    const newSize = fs.statSync(tempPath).size;
                    
                    // Only keep compressed file if it's actually smaller
                    if (newSize < originalSize) {
                        fs.renameSync(tempPath, fullPath);
                        const saved = originalSize - newSize;
                        totalSaved += saved;
                        console.log(`✅ Compressed ${file}: saved ${(saved / 1024).toFixed(2)} KB`);
                    } else {
                        fs.unlinkSync(tempPath);
                        console.log(`⏩ Skipped ${file}: already optimized ${(originalSize / 1024).toFixed(2)} KB -> ${(newSize / 1024).toFixed(2)} KB`);
                    }
                    
                } catch (e) {
                    console.error(`❌ Error processing ${fullPath}:`, e.message);
                }
            }
        }
    }
    return totalSaved;
}

console.log('Starting image compression...');
processDir(dir).then((saved) => {
    console.log(`\n🎉 Finished! Total space saved: ${formatBytes(saved)}`);
});
