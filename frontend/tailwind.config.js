/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        gold: {
          50:  'oklch(0.97 0.04 75)',
          100: 'oklch(0.93 0.07 75)',
          200: 'oklch(0.88 0.10 75)',
          300: 'oklch(0.83 0.12 75)',
          400: 'oklch(0.78 0.12 75)',
          500: 'oklch(0.72 0.11 70)',
          600: 'oklch(0.65 0.10 68)',
          700: 'oklch(0.55 0.09 65)',
          800: 'oklch(0.42 0.07 65)',
          900: 'oklch(0.30 0.05 65)',
        },
        nexiris: {
          dark:    'oklch(0.10 0.02 260)',
          darker:  'oklch(0.08 0.015 260)',
          navy:    'oklch(0.14 0.03 260)',
          slate:   'oklch(0.20 0.03 260)',
          muted:   'oklch(0.30 0.03 260)',
          light:   'oklch(0.70 0.02 260)',
          lighter: 'oklch(0.85 0.01 260)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'gold-glow': '0 0 24px oklch(0.78 0.12 75 / 0.3)',
        'gold-glow-lg': '0 0 48px oklch(0.78 0.12 75 / 0.25)',
        'dark-lg': '0 8px 32px oklch(0.05 0.01 260 / 0.6)',
        'card': '0 2px 12px oklch(0.05 0.01 260 / 0.4)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 12px oklch(0.78 0.12 75 / 0.3)' },
          '50%': { boxShadow: '0 0 28px oklch(0.78 0.12 75 / 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};
