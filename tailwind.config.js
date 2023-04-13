/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter', 'ui-sans-serif', 'system-ui'],
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'serif': ['Inter', 'ui-sans-serif', 'system-ui'],
        'body': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        "primary": "#acc7ff",
        "on-primary": "#2a74e2",
        "primary-container": "#005ac5",
        "on-primary-container": "#d6e2ff",
        "secondary": "#bfc6dc",
        "on-secondary": "#283041",
        "secondary-container": "#3f4759",
        "on-secondary-container": "#dae2f9",
        "tertiary": "#debbdf",
        "on-tertiary": "#402843",
        "tertiary-container": "#583e5b",
        "on-tertiary-container": "#fbd7fb",
        "error": "#ffb4a9",
        "on-error": "#680003",
        "error-container": "#930006",
        "on-error-container": "#ffdad4",
        "background": "#1b1b1e",
        "light-background": "#1f1f22",
        "lighter-background": "#232326",
        "hover-background": "#2d2d31",
        "on-background": "#e4e2e6",
        "surface": "#1b1b1e",
        "on-surface": "#e4e2e6",
        "surface-variant": "#44474f",
        "on-surface-variant": "#c4c6d0",
        "outline": "#8e9099",
        "outline-variant": "#44474f",
        "inverse-surface": "#e4e2e6",
        "on-inverse-surface": "#2f3033",
        "inverse-primary": "#005ac5",
        "shadow": "#000000",
        "scrim": "#000000"
      },
    },
  },
  plugins: [],
}

