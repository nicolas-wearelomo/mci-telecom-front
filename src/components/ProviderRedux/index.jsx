"use client";
import { Provider } from "react-redux";
import store, { persistor } from "../../redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import PrivateRoute from "../../utils/PrivateRoute";

export default function ProviderRedux({ children }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PrivateRoute>{children}</PrivateRoute>
      </PersistGate>
    </Provider>
  );
}
