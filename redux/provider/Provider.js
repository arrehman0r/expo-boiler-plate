import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Store, { persistor } from "../store/store";

import AppToast from "../../components/AppToast";
import AppLoader from "../../components/AppLoader";
import { SafeAreaProvider } from "react-native-safe-area-context";




export function StoreProviders({ children }) {


  return (
    <SafeAreaProvider>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
       
        {children}

      </PersistGate>
    </Provider>
</SafeAreaProvider>
  );
}
