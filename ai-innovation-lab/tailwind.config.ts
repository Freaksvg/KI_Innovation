import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep': '#050810',
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float-orb': 'float-orb 12s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.2)' },
          '50%':       { boxShadow: '0 0 40px rgba(0,229,255,0.5), 0 0 80px rgba(0,229,255,0.2)' },
        },
        'float-orb': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%':      { transform: 'translate(-20px, 15px) scale(0.97)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
