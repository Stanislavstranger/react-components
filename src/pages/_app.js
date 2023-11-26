import '../styles/global.css'
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}