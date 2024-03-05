/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                container: "1320px",
            },
            colors: {
                headingColor: "#111111",
                detailsColor: "#666666",
                hoverColor: "#ef4a23",
            },
        },
    },
    plugins: [],
};
