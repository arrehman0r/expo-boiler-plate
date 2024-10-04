import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Use AsyncStorage for Expo
import rootReducer from "../reducer"; // Root reducer

// Redux Persist Config
const persistConfig = {
  key: "root",
  storage: AsyncStorage, // Use AsyncStorage for Expo
  whitelist: ["user"], // Only persist specific slices
  blacklist: [], // Use this if you want to blacklist slices
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production", // Enable DevTools in development
});

// Persistor for persisting store
export const persistor = persistStore(store);

export default store;
