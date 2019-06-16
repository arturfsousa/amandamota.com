const breakpoints = {
  small: "@media screen and (max-width: 39.9375em)",
  smallLandscape:
    "@media screen and (max-width: 39.9375em) and (orientation: landscape)",
  medium: "@media screen and (min-width: 40em) and (max-width: 63.9375em)",
  mediumUp: "@media screen and (min-width: 40em)",
  large: "@media screen and (min-width: 64em) and (max-width: 74.9375em)",
  largeUp: "@media screen and (min-width: 64em)",
  xlargeUp: "@media screen and (min-width: 75em)",
}

const mq = breakpoint => breakpoints[breakpoint]

export default mq
