import React from 'react';
import type { AppProps } from 'next/app';

import { store } from 'src/store';
import { Provider } from 'react-redux';

import 'styles/reset.css';
import 'styles/common.css';
import 'styles/profile.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
