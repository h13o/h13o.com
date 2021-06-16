import 'tailwindcss/tailwind.css';
import "../styles/prism-dracula.css"
import "../styles/twitter.css"
import { AppProps } from 'next/app';
import usePageView from '../hooks/usePageView'
import { AnimatePresence } from "framer-motion"


const App = ({ Component, pageProps, router }: AppProps) => {
  usePageView()
  return (
    //framer-motion
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />;
    </AnimatePresence>
  )
};

export default App;
