import { SessionProvider } from "next-auth/react"
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <NextNProgress 
        options={{ showSpinner: false }}
        color="#ebde4d"
        startPosition={0.7}
        stopDelayMs={50}
        height={1}
        showOnShallow={false}
        />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp