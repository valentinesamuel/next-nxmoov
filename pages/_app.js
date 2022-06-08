import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./components/utils/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
