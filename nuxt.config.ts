import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: ["~/assets/css/tailwind.css"],

    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css",
                },
            ],
            script: [
                {
                    src: "https://unpkg.com/flowbite@1.4.7/dist/flowbite.js",
                    defer: true,
                },
            ],
        },
    },
});
