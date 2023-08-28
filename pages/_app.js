import React from "react";
import withApollo from "../libs/withApollo";
import PokemonContextProvider from "../contextProviders/PokemonContextProvider";
import { Provider } from "react-redux";
import { store } from "../store/config";
// styles
import "font-awesome/css/font-awesome.min.css";
import GlobalStyle from "../globalStyles";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PokemonContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </PokemonContextProvider>
    </Provider>
  );
}
export default withApollo(MyApp);
