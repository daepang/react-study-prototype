import 'styles/reset.css';
import 'styles/common.css';
import 'styles/profile.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
