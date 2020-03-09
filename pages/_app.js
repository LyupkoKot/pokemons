import withApollo from "../libs/withApollo";
import PokemonContextProvider from "../contextProviders/PokemonContextProvider";
import { Provider } from "react-redux";
import { store } from "../store/config";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PokemonContextProvider>
        <Component {...pageProps} />
      </PokemonContextProvider>
    </Provider>
  );
}
export default withApollo(MyApp);
