/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    // NOTE: colors, fonts, spacing and type-scale all resolve to CSS custom
    // properties declared once in app/globals.css. Rebranding the whole site
    // (new palette, new typefaces, new rhythm) means editing that single file —
    // nothing in these Tailwind mappings, or in any component, needs to change.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bg: {
        main: "rgb(var(--c-bg-main) / <alpha-value>)",
        accent: "rgb(var(--c-bg-accent) / <alpha-value>)",
        dark: "rgb(var(--c-bg-dark) / <alpha-value>)",
      },
      text: {
        dark: "rgb(var(--c-text-dark) / <alpha-value>)",
        medium: "rgb(var(--c-text-medium) / <alpha-value>)",
        light: "rgb(var(--c-text-light) / <alpha-value>)",
      },
      line: {
        light: "rgb(var(--c-line-light) / <alpha-value>)",
        medium: "rgb(var(--c-line-medium) / <alpha-value>)",
        dark: "rgb(var(--c-line-dark) / <alpha-value>)",
      },
      brand: {
        DEFAULT: "rgb(var(--c-brand) / <alpha-value>)",
        invert: "rgb(var(--c-brand-invert) / <alpha-value>)",
      },
      error: "rgb(var(--c-error) / <alpha-value>)",
    },
    fontFamily: {
      display: "var(--font-display)",
      body: "var(--font-body)",
    },
    fontSize: {
      h1: "var(--t-h1)",
      h2: "var(--t-h2)",
      h3: "var(--t-h3)",
      h4: "var(--t-h4)",
      h5: "var(--t-h5)",
      intro: "var(--t-intro)",
      body: "var(--t-body)",
      input: "var(--t-input)",
      footnote: "var(--t-footnote)",
      brow: "var(--t-brow)",
      "brow-sm": "var(--t-brow-sm)",
      utility: "var(--t-utility)",
    },
    spacing: {
      0: "0px",
      px: "1px",
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      s: "var(--space-s)",
      m: "var(--space-m)",
      l: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-3xl)",
      pp: "var(--space-pp)",
      header: "var(--space-header-height)",
      btn: "var(--space-btn-height)",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
    },
    extend: {
      maxWidth: {
        container: "99rem",
      },
      letterSpacing: {
        eyebrow: "0.06em",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      },
      boxShadow: {
        card: "0 20px 50px -20px rgb(0 0 0 / 0.25)",
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [],
};
