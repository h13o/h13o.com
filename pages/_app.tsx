import 'tailwindcss/tailwind.css';
import "../styles/prism-dracula.css"
import "../styles/twitter.css"
import { AppProps } from 'next/app';
import usePageView from '../hooks/usePageView'


const App = ({ Component, pageProps }: AppProps) => {
  usePageView()
  return <Component {...pageProps} />;
};

export default App;
