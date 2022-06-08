import { extendTheme } from "@chakra-ui/react";

const colors = {
  transparent: "transparent",
  black: "#0000",
  white: {
    50: "#FFFFFF",
    100: "#FFFFFF1A",
  },
  gray: {
    25: "#EEEEF0",
    50: "#F8FAFB",
    100: "#F4F6F7",
    200: "#E1EAED",
    300: "#DAE1E3",
    400: "#C0C9CC",
    500: "#98A5A9",
    600: "#98A5A9",
    900: "#17191A",
  },
  green: {
    900: "#0F8E6A",
  },
  primaryColors: {
    celadonBlue: "#0580A4",
    seaBlue: "#046F8F",
    darkSkyBlue: "#82BFD1",
    azureishBlue: "#E6F2F6",
  },
  secondaryColor: {
    crayolaGreen: "#1DC67D",
    cyanGreen: "#0F8E6A",
    honeyDew: "#E9FAF2",
    cinnabarRed: "#F1472F",
    darkPasterRed: "#BA3724",
    linen: "#FEEDEB",
  },
  supportColors: {
    celticBlue: "#287CC9",
    winterGreenDream: "#507D7B",
    mustardYellow: "#EEA401",
    mediumSlateBlue: "#6872E5",
    purplePlum: "#AB56B2",
    persionaGreen: "#0BAD90",
  },
};

const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};
const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
};
const lineHeights = {
  1: "1rem",
  2: "1.25rem",
  3: "1.5rem",
  4: "1.75rem",
  5: "2rem",
  6: "2.25rem",
  7: "2.5rem",
};

export const theme = extendTheme({
  colors,
  fontSizes,
  fontWeights,
  lineHeights,
});
