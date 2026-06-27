/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#07060c',
          surface: '#100f18',
          card: '#14131e',
          border: 'rgba(255,255,255,0.08)',
        },
        violet: {
          glow: '#a855f7',
        },
        indigo: {
          glow: '#6366f1',
        },
        ink: {
          DEFAULT: '#f5f5f7',
          muted: '#9b9aa8',
          faint: '#6c6b7a',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(99,102,241,0.15) 100%)',
        'radial-glow': 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.25) 0%, rgba(99,102,241,0.08) 45%, transparent 70%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(168,85,247,0.25)',
        'glow-sm': '0 0 20px rgba(168,85,247,0.18)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'spin-slower': 'spin 22s linear infinite reverse',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.5, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
