import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../store/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <main>
              <Component {...pageProps} />
          </main>
      </Provider>
  )
}

export default MyApp
