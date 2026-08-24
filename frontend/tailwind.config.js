/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#bfc2ff",
        "on-error": "#690005",
        "on-secondary-container": "#0f6d00",
        "tertiary-container": "#8087f4",
        "on-surface-variant": "#dcbed4",
        "on-error-container": "#ffdad6",
        "surface-tint": "#ffabf3",
        "primary-fixed-dim": "#ffabf3",
        "tertiary": "#bfc2ff",
        "surface-container-highest": "#333535",
        "on-secondary-fixed-variant": "#095300",
        "on-tertiary-fixed": "#00006e",
        "primary": "#ffabf3",
        "on-primary": "#5b005b",
        "secondary-fixed-dim": "#2ae500",
        "inverse-on-surface": "#2f3131",
        "on-primary-container": "#510051",
        "error": "#ffb4ab",
        "surface-variant": "#333535",
        "secondary": "#d7ffc5",
        "on-primary-fixed-variant": "#810081",
        "tertiary-fixed": "#e0e0ff",
        "surface-container-low": "#1a1c1c",
        "on-primary-fixed": "#380038",
        "secondary-fixed": "#79ff5b",
        "outline": "#a4899d",
        "on-tertiary": "#181d8c",
        "on-background": "#e3e2e2",
        "primary-container": "#ff00ff",
        "inverse-surface": "#e3e2e2",
        "on-secondary": "#053900",
        "surface-dim": "#121414",
        "outline-variant": "#564052",
        "primary-fixed": "#ffd7f5",
        "on-tertiary-container": "#0f1487",
        "background": "#121414",
        "surface-container-high": "#292a2a",
        "on-tertiary-fixed-variant": "#3239a3",
        "error-container": "#93000a",
        "secondary-container": "#2ff801",
        "surface-bright": "#38393a",
        "on-secondary-fixed": "#022100",
        "surface": "#121414",
        "surface-container": "#1e2020",
        "on-surface": "#e3e2e2",
        "surface-container-lowest": "#0d0e0f",
        "inverse-primary": "#a900a9"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "window-padding": "12px",
        "unit": "4px",
        "margin-edge": "16px",
        "gutter": "8px"
      },
      fontFamily: {
        "label-sm": ["Space Mono"],
        "code-terminal": ["JetBrains Mono"],
        "headline-md": ["Newsreader"],
        "display-lg": ["Newsreader"],
        "body-md": ["JetBrains Mono"]
      },
      fontSize: {
        "label-sm": ["12px", { lineHeight: "1", fontWeight: "700" }],
        "code-terminal": ["14px", { lineHeight: "1.4", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.05em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }]
      }
    },
  },
  plugins: [],
}
