/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1E4D8F',
                    dark: '#0F1A2A',
                    light: '#4A6FA5',
                },
                accent: {
                    DEFAULT: '#C0392B',
                },
                background: {
                    DEFAULT: '#F8F9FB',
                },
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(135deg, #0F1A2A, #1E4D8F)',
                'dark-gradient': 'linear-gradient(135deg, #0F1A2A, #0a111c)',
                'primary-gradient': 'linear-gradient(135deg, #1E4D8F, #4A6FA5)',
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
                'primary': '0 0 30px rgba(30, 77, 143, 0.4)',
                'glass': '0 8px 32px rgba(31, 38, 135, 0.15)',
            },
        },
    },
    plugins: [],
}
