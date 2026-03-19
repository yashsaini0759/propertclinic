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
                    dark: '#0F1F3A',
                    light: '#4A6FA5',
                },
                accent: {
                    DEFAULT: '#C0392B',
                    hover: '#A93226',
                },
                navy: {
                    DEFAULT: '#0F1F3A',
                    light: '#1A2F50',
                },
                gold: {
                    DEFAULT: '#CBA135',
                },
                surface: {
                    DEFAULT: '#F8F6F2',
                    blue: '#F0F4FA',
                    card: '#FFFFFF',
                },
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'blue-gradient': 'linear-gradient(135deg, #1E4D8F, #4A6FA5)',
                'navy-gradient': 'linear-gradient(135deg, #0F1F3A, #1A2F50)',
                'hero-overlay': 'linear-gradient(to right, rgba(15,31,58,0.92) 0%, rgba(15,31,58,0.75) 50%, rgba(15,31,58,0.2) 100%)',
            },
            animation: {
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'float': 'float 6s ease-in-out infinite',
                'marquee': 'marqueeScroll 40s linear infinite',
                'count-up': 'fadeIn 0.5s ease-out',
            },
            keyframes: {
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(37, 211, 102, 0.5)' },
                    '50%': { boxShadow: '0 0 35px rgba(37, 211, 102, 0.9)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                marqueeScroll: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            boxShadow: {
                'luxury': '0 20px 60px rgba(0,0,0,0.15)',
                'blue-glow': '0 0 30px rgba(30, 77, 143, 0.35)',
                'red-glow': '0 0 20px rgba(192, 57, 43, 0.45)',
                'card': '0 4px 24px rgba(15, 31, 58, 0.08)',
                'card-hover': '0 12px 40px rgba(15, 31, 58, 0.14)',
                'glass': '0 8px 32px rgba(15, 31, 58, 0.12)',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
        },
    },
    plugins: [],
}
