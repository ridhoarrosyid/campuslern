import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                dmsans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                lightGreySecondary: "#d9d9d9",
                darkGreySecondary: "#6b6b6b",
                lightBluePrimary: "#3aa6ed",
                lightBlueSecondary: "#E2F1FB",
                borderGrey: "#bababa",
            },
        },
    },

    plugins: [forms],
};
