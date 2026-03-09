/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D4AF37", // Gold
                background: "#0F0F0F", // Deep Dark
                accent: "#F5F5F0", // Cream
            },
            fontFamily: {
                serif: ["'Playfair Display'", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
}
