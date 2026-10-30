/** Light academic theme. Change a colour here and every slide follows. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        heading: '#222222', body: '#333333', muted: '#666666',
        navy: '#345779', line: '#DDDDDD', wash: '#F7F7F7',
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
