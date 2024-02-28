import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-2": "url('/aboutus/color-bg.jpg')",
        "bg-3": "url('/aboutus/color-bg-2.jpg')",
        "bg-4": "url('/aboutus/color-bg-3.jpg')",
        "bg-5": "url('/aboutus/colo-bg-4.jpg')",
        "bg-6": "url('/aboutus/contact.jpg')",
        "bg-texture" : "url('aboutus/texture.jpg')"
      },
      colors: {
        primary: "#ffbb38",
        secondry: "#203b81",
      },
    },
  },
  plugins: [require("daisyui"),
            require('flowbite/plugin')],
  
};
export default config;
