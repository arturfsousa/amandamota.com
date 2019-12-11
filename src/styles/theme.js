export default {
  header: {
    height: {
      small: "70px",
      large: "105px",
    },
  },
  colors: {
    primary: "rgb(128,161,212)",
    hover: "rgb(175,200,234)",
    strong: "rgb(71, 112, 170)",
    dark: "rgb(52,69,92)",
    gray: {
      50: "#f4f4f4",
      100: "#ededed",
      200: "#bdbec0",
    },
  },
  grid: {
    maxWidth: "64rem",
    colPadding: "1.0875rem",
  },
  typography: {
    antonio: '"Antonio", arial, sans-serif',
  },
}

export function rgba(color, alpha) {
  const rgb = color.match(/rgb\(([0-9]+),([0-9]+),([0-9]+)\)/)
  return `rgba(${rgb[1]},${rgb[2]},${rgb[3]},${alpha})`
}
