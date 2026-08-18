import tailwindcssAnimate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#080303',
          900: '#100807',
          800: '#1e0d0c',
          700: '#281514',
        },
        surface: {
          DEFAULT: '#191110',
          light: '#261918',
          border: '#332322',
        },
        violet: {
          200: '#FB4701',
          300: '#FB4701',
          400: '#FB4701',
          500: '#FB4701',
          600: '#FB4701',
          700: '#FB4701',
        },
        muted: '#a1a1aa',

        // shadcn/ui semantic tokens (CSS-variable driven, see src/index.css)
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
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Nasalization"', 'sans-serif'],
      },
      backgroundImage: {
        'violet-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(251,71,1,0.25) 0%, rgba(251,71,1,0) 70%)',
        'grid-fade':
          'linear-gradient(180deg, rgba(251,71,1,0.06) 0%, rgba(0,0,0,0) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(251,71,1,0.35)',
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
