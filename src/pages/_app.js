// pages/_app.js
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <Component {...pageProps} />
      </NextThemesProvider>
    </NextUIProvider>
  );
}
