/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {

    extend: {
      fontFamily: {
        natslite: "nantes-lite",
        natsreguler: "nantes-reguler",
        natsnatsbold: "nantes-bold",


        messinablack: "messina-black",
        messinabold: "messina-bold",
        messinabook: "messina-book",
        messinasemibold: 'messina-semibold',
        messinareguler: 'messina-reguler',


        neue: 'neue',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}