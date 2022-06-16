/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        '14': '14px',
      },
      width: {
        '100': '55rem',
        '84': '22rem'
      },
      lineHeight: {
        'high': '1.6',
      },
      backgroundColor: {
        'hover-button': 'hsl(176, 68%, 64%)',
        'button': '#46B5D3',
        'main-bg': 'hsl(218, 28%, 13%)',
        'header-bg': 'hsl(217, 28%, 15%)',
        'testimonial-bg': 'hsl(219, 30%, 18%)',
        'footer-bg': 'hsl(216, 53%, 9%)',
        'twitter-bg': '#1da1f2',
        'facebook-bg': '#4267B2'
      },
      textColor: {
        'button': 'hsl(176, 68%, 64%)'
      },
      borderColor: {
        'color': 'hsl(176, 68%, 64%)'
      },
      boxShadow: {
        '3xl': '10px 8px 20px 2px rgba(0,0,0,0.66);'
      },
      outlineColor: {
        'twitter': '#1da1f2',
        'facebook': '#4267B2',
        'instagram': '#a02d76'
      },
      transitionProperty: {
        'outline': 'outline-offset, outline-color, background-color',
        'bg-size': 'background-size',
      },
      keyframes: {
        shake: {
          '10%': { transform: 'rotate(10deg)' },
          '20%': { transform: 'rotate(-10deg)' },
          '30%': { transform: 'rotate(10deg)' },
          '40%': { transform: 'rotate(-10deg)' },
        }
      },
      animation: {
        shake: 'shake 1s'
      },
      backgroundImage: {
        'ig-gradient':
          "linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)",
        'text-gradient': 'linear-gradient(#46B5D3, #46B5D3)'
      },
      backgroundSize: {
        '0': '0% 2px',
        '3': '100% 2px'
      }
    },
  },
  plugins: [],
}