const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      'sm': '375px',    // mobile
      'md': '768px',    // tablet
      'lg': '1440px',   // desktop
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
