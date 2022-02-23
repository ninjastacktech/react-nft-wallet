module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Inconsolata', 'Menlo', 'monospace'],
      body: ['Inconsolata', 'Menlo', 'monospace'],
    },
    extend: {
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeOut: 'fadeOut 1s ease-in-out',
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '100%' },
        },
        fadeOut: {
          '0%': { opacity: '100%' },
          '100%': { opacity: '0%' },
        },
      }),
    },
  },
};
