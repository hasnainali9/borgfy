// theme.config.mjs
import { defineConfig } from "tailwindcss"

export default defineConfig({
    theme: {
        extend: {
            colors: {
                primary: "#2A2A28",
            },
            fontFamily: {
                switzer: ["var(--font-switzer)"],
                sans: ["var(--font-switzer)", "sans-serif"],
            },
        },
    },
})
