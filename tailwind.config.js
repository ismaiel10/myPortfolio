/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F7F4',
        paper: '#FAF9F6',
        surface: {
          DEFAULT: '#F2EFE9',
          subtle: '#EAE7E0',
          muted: '#E0DDD4',
          dark: '#141413',
        },
        charcoal: {
          DEFAULT: '#141413',
          muted: '#2A2A28',
          soft: '#3E3E3A',
        },
        stone: {
          DEFAULT: '#6B6963',
          light: '#9C9A92',
          faint: '#D4D1C9',
        },
        accent: {
          olive: '#384333',
          terracotta: '#8C4533',
          burgundy: '#5E2732',
          clay: '#4F5849',
        },
        border: {
          subtle: 'rgba(20, 20, 19, 0.08)',
          medium: 'rgba(20, 20, 19, 0.14)',
          strong: 'rgba(20, 20, 19, 0.22)',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      boxShadow: {
        editorial: '0 20px 40px -15px rgba(20, 20, 19, 0.06)',
        lift: '0 12px 28px -8px rgba(20, 20, 19, 0.08)',
        subtle: '0 2px 8px rgba(20, 20, 19, 0.04)',
      },
    },
  },
  plugins: [],
}
