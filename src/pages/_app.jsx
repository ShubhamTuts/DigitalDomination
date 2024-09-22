import { ThemeProvider } from "@/context/ThemeContext";
import "../styles/index.scss"; 


if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}


export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider>
  <Component {...pageProps} />
  </ThemeProvider>
  )
}
