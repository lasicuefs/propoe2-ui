/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        fontFamily: {
            "sans": ["ui-sans-serif", "system-ui"],
            "serif": ["Cardo", "ui-serif", "Georgia"],
            "mono": ["ui-monospace", "SFMono-Regular"],
        },
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
}
