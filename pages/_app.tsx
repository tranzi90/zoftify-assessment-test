import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store, {persistor} from '../store'
import { Provider } from 'react-redux'
import Head from "next/head"
import Sidebar from "../components/Sidebar"
import {PersistGate} from "redux-persist/integration/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>Assessment test</title>
              <link rel="icon" type="image/svg" href="/icon.svg" />
          </Head>
          <Provider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                  <div className="flex">
                      <Sidebar />
                      <div className="w-full">
                          <Component {...pageProps} />
                      </div>
                  </div>
              </PersistGate>
          </Provider>
      </>
  )
}

export default MyApp
