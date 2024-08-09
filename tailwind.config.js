/** @type {import('tailwindcss').Config} */
import tailwindAnimated from 'tailwindcss-animate'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  prefix: '',
  theme: {
    transitionDuration: {
      DEFAULT: '300ms',
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      ...colors,
      blue: {
        50: '#F8F9FD',
        100: '#D8E7FF',
        200: '#B9D2FF',
        300: '#8FB3FF',
        400: '#6385FF',
        500: '#3F59FF',
        600: '#1E2BFF',
        700: '#2129F0',
        800: '#131DC0',
        900: '#192396',
        950: '#0F1357',
      },
      orange: {
        50: '#FEF9EE',
        100: '#FCF2D8',
        200: '#F8E0B0',
        300: '#F3C97E',
        400: '#EDA84A',
        500: '#E99029',
        600: '#DA751C',
        700: '#B55A19',
        800: '#90481C',
        900: '#743C1A',
        950: '#3F1D0B',
      },
      green: {
        50: '#F0FDF2',
        100: '#DBFDE2',
        200: '#B9F9C7',
        300: '#83F29B',
        400: '#4DE36E',
        500: '#1EC944',
        600: '#12A733',
        700: '#12832C',
        800: '#146727',
        900: '#125523',
        950: '#042F10',
      },
      red: {
        50: '#FFF3F1',
        100: '#FFE4E0',
        200: '#FFCDC6',
        300: '#FFAA9E',
        400: '#FF7865',
        500: '#FE4D35',
        600: '#ED3F27',
        700: '#C6250F',
        800: '#A42210',
        900: '#872315',
        950: '#4A0D05',
      },
      gray: {
        50: '#FFFFFF',
        100: '#F8F8F8',
        200: '#EBEBEB',
        300: '#B0B0B0',
        400: '#888888',
        500: '#6D6D6D',
        600: '#5D5D5D',
        700: '#4F4F4F',
        800: '#454545',
        900: '#3D3D3D',
        950: '#101010',
      },
      gradient: 'var(--gradient)',
      background: 'hsl(var(--background) / <alpha-value>)',
      foreground: 'hsl(var(--foreground) / <alpha-value>)',
      muted: 'hsl(var(--muted) / <alpha-value>)',
      'muted-foreground': 'hsl(var(--muted-foreground) / <alpha-value>)',
      popover: 'hsl(var(--popover) / <alpha-value>)',
      'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
      card: 'hsl(var(--card) / <alpha-value>)',
      'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
      border: 'hsl(var(--border) / <alpha-value>)',
      input: 'hsl(var(--input) / <alpha-value>)',
      primary: 'hsl(var(--primary) / <alpha-value>)',
      'primary-foreground': 'hsl(var(--primary-foreground) / <alpha-value>)',
      secondary: 'hsl(var(--secondary) / <alpha-value>)',
      'secondary-foreground':
        'hsl(var(--secondary-foreground) / <alpha-value>)',
      accent: 'hsl(var(--accent) / <alpha-value>)',
      'accent-foreground': 'hsl(var(--accent-foreground) / <alpha-value>)',
      destructive: 'hsl(var(--destructive) / <alpha-value>)',
      'destructive-foreground':
        'hsl(var(--destructive-foreground) / <alpha-value>)',
      ring: 'hsl(var(--ring) / <alpha-value>)',
    },
    extend: {
      boxShadow: {
        sidebar: `
        -6px 21px 49px 0px #6B6B6B1A,
        -23px 85px 88px 0px #6B6B6B17,
        -51px 192px 119px 0px #6B6B6B0D,
        -91px 341px 141px 0px #6B6B6B03,
        -143px 533px 154px 0px #6B6B6B00;`,
      },
      transitionProperty: {
        width: 'width',
        spacing: 'margin, padding',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        sans: ['Visby', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [tailwindAnimated],
}
