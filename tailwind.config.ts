import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/admin/dashboard/absensi/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/admin/dashboard/karyawan/*.{js,ts,jsx,tsx,mdx}",
    "./src/feature/admin/dashboard/analisis/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
      },
      dropShadow: {
        "blue": "0 10px 28px rgba(59, 130, 246, 1)",
      }
    },
  },
  plugins: [],
};
export default config;
