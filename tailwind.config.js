/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                emerald: {
                    DEFAULT: '#0F3D3E',
                    dark: '#0B1F22',
                    light: '#1C5A5B',
                },
                gold: {
                    DEFAULT: '#CBA135',
                    light: '#E5BE6A',
                    dark: '#A07820',
                },
                slate: {
                    accent: '#4A6FA5',
                },
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(135deg, #0F3D3E, #1C5A5B)',
                'dark-gradient': 'linear-gradient(135deg, #0B1F22, #0F3D3E)',
                'gold-gradient': 'linear-gradient(135deg, #CBA135, #E5BE6A)',
            },
            animation: {
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marquee 40s linear infinite',
                'marquee-reverse': 'marqueeReverse 40s linear infinite',
            },
            keyframes: {
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(37, 211, 102, 0.5)' },
                    '50%': { boxShadow: '0 0 35px rgba(37, 211, 102, 0.9)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                marqueeReverse: {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
            boxShadow: {
                'luxury': '0 20px 60px rgba(0,0,0,0.3)',
                'gold': '0 0 30px rgba(203, 161, 53, 0.4)',
                'glass': '0 8px 32px rgba(31, 38, 135, 0.15)',
            },
        },
    },
    plugins: [],
}
