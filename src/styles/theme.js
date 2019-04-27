export default {
  header: {
    height: {
      small: "50px",
      large: "105px",
    },
  },
  colors: {
    primary: "rgb(128,161,212)",
    hover: "rgb(175,200,234)",
    dark: "rgb(53,69,94)",
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
