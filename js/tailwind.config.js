module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      animation: {
        'expand-1': 'expand-1 2.5s cubic-bezier(0.76,0,0.24,1) infinite',
        'expand-2': 'expand-2 2.5s cubic-bezier(0.76,0,0.24,1) infinite',
        'expand-3': 'expand-3 2.5s cubic-bezier(0.76,0,0.24,1) infinite',
        'expand-4': 'expand-4 2.5s cubic-bezier(0.76,0,0.24,1) infinite',
        'expand-5': 'expand-5 2.5s cubic-bezier(0.76,0,0.24,1) infinite',
        'expand-6': 'expand-6 2.5s cubic-bezier(0.76,0,0.24,1) infinite',
      }
    },
  },
  plugins: [],
}
