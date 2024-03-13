import { OpenpanelProvider } from '@openpanel/nextjs'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <OpenpanelProvider
        clientId="188093bf-41d1-4982-a2fb-15f761109f51"
        trackScreenViews
        trackAttributes
        trackOutgoingLinks
      />
      <Component {...pageProps} />;
    </>
  )
}
