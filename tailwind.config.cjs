// const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  mode: 'jit',
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: 'true',
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        transparent: 'transparent',
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
        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
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
        blue: {
          600: '#2563EB',
        },
        green: {
          150: '#F3FEE7',
          250: '#4CA30D',
          350: '#3B7C0F',
        },
        yellow: {
          50: '#FFFAEB',
          100: '#FEF0C7',
        },
        red: {
          50: '#FEF3F2',
          100: '#DC6803',
          200: '#D92D20',
        },
        error: {
          300: '#FDA29B',
          600: '#D92D20',
          700: '#B42318',
        },
        teal: {
          25: '#E8FCFC',
          50: '#E8FCFC',
          100: '#CFFBFC',
          200: '#A2F3F6',
          300: '#60E6EB',
          400: '#17CCD3',
          500: '#14B2B8',
          600: '#0D9196',
          700: '#13787C',
          800: '#0F5E61',
          900: '#104A4C',
        },
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#182230',
          900: '#101828',
        },
        fresh: {
          200: '#D9F6F2',
        },
      },
      width: {
        'full-15': 'calc(100% - 60px)',
        'full-41': 'calc(100% - 164px)',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '18px', fontWeight: '500' }],
        sm: ['14px', { lineHeight: '20px', fontWeight: '500' }],
        md: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        lg: ['18px', { lineHeight: '28px', fontWeight: '600' }],
        title: ['20px', { lineHeight: '30px', fontWeight: '600' }],
        semibold: ['16px', { lineHeight: '24px', fontWeight: '600' }],
        display: ['30px', { lineHeight: '38px', fontWeight: '600' }],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeIn: {
          '0%': {
            transform: 'scale(95%)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(100%)',
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            transform: 'scale(100%)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(95%)',
            opacity: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        fadeIn: 'fadeIn 100ms ease-out',
        fadeOut: 'fadeOut 75ms ease-in',
      },
      transitionProperty: {
        background: 'background-color',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
