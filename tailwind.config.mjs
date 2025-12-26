/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./pages/**/*.{js,jsx,tsx,mdx}",
        "./components/**/*.{js,jsx,tsx,mdx}",
        "./app/**/*.{js,jsx,tsx,mdx}",
        "./src/**/*.{js,jsx,tsx,mdx}", // covers if you have src/
    ],
    theme: {
        extend: {
            fontFamily: {
                switzer: ["var(--font-switzer)"], // use with className="font-switzer"
            },
            colors: {
                primary: "#2A2A28",
            },
        },
    },
    plugins: [],
}

export default config
