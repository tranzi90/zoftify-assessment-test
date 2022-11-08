import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store'
import { Provider } from 'react-redux'
import Head from "next/head"
import Sidebar from "../components/Sidebar"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>Assessment test</title>
              <link rel="icon" type="image/svg" href="/icon.svg" />
          </Head>
          <Provider store={store}>
              <div className="flex">
                  <Sidebar />
                  <div className="w-full">
                      <Component {...pageProps} />
                  </div>
              </div>
          </Provider>
      </>
  )
}

export default MyApp
