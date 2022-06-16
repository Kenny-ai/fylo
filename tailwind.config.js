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
        'testimonial-bg': 'hsl(219, 30%, 18%)',
        'footer-bg': 'hsl(216, 53%, 9%)'
      },
      textColor: {
        'button': 'hsl(176, 68%, 64%)'
      },
      borderColor: {
        'color': 'hsl(176, 68%, 64%)'
      },
      boxShadow: {
        '3xl': '10px 8px 20px 2px rgba(0,0,0,0.66);'
      }
    },
  },
  plugins: [],
}


// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
//   darkMode: 'class',
//   theme: {
//     fontFamily: {
//       display: ['Open Sans', 'sans-serif'],
//       body: ['Open Sans', 'sans-serif'],
//     },
//     extend: {
//       fontSize: {
//         14: '14px',
//       },
//       backgroundColor: {
//         // 'main-bg': '#FAFBFB',
//         // 'main-bg': '#E5E7EB',
//         'main-bg': '#f3f4f6',
//         'main-dark-bg': '#20232A',
//         'secondary-dark-bg': '#33373E',
//         'light-gray': '#F7F7F7',
//         'half-transparent': 'rgba(0, 0, 0, 0.5)',
//       },
//       borderWidth: {
//         1: '1px',
//       },
//       borderColor: {
//         color: 'rgba(0, 0, 0, 0.1)',
//       },
//       width: {
//         400: '400px',
//         760: '760px',
//         780: '780px',
//         800: '800px',
//         1000: '1000px',
//         1200: '1200px',
//         1400: '1400px',
//       },
//       height: {
//         80: '80px',
//       },
//       minHeight: {
//         590: '590px',
//       },
//       backgroundImage: {
//         'hero-pattern':
//           "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
//       },
//     },
//   },
//   plugins: [],
// };