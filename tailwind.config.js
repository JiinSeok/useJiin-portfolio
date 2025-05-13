const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px', // mobile
      md: '768px', // tablet
      lg: '1440px', // desktop
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
