const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      'mobile': '375px',
      'tablet': '768px',
      'desktop': '1440px',
    },
    extend: {
      colors: {
        primary: '#1e40af',
      },
    },
  },
  plugins: [],
}

export default config
