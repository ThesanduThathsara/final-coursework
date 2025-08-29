/** @type {import('tailwindcss').Config} */
module.exports = {
    // Add any folders where you use className
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    // Important: enable NativeWind preset
    presets: [require("nativewind/preset")],
    theme: {
        extend: {},
    },
    plugins: [],
};