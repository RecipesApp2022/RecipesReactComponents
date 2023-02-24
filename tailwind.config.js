module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  },
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      full: '100% 100%',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: {
          light: '#7ADE8E',
          DEFAULT: '#58C16D',
          dark: '#398448',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'),
    // ...
  ],
}

