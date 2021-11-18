import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "900": `#181823`,
      "800": `#1F2029`,
      "700": `#353646`,
      "600": `#4B4D63`,
      "500": `#616488`,
      "400": `#797D9a`,
      "300": `#9699b8`,
      "200": `#B3B5C6`,
      "100": `#D1D2DC`,
      "50": `#EEEEF2`,
    },
    mainColor: {
      "400": `#6927FF`,
      "600": `#2c0642`,
    },
    secondColor: {
      "400": `#93329E`,
    },
    background: `#f8f8f8`,
  },
  fonts: {
    heading: `Open Sans`,
    body: `Open Sans`,
  },
  styles: {
    global: {
      body: {
        bg: `background`,
        color: `gray.900`,
      },
    },
  },
});
