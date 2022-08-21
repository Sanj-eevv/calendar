/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/features/**/*.{jsx, js}",
        "./src/pages/**/*.{jsx, js}",
        "./src/ui/**/*.{jsx, js}",
    ],
    important: true,
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
