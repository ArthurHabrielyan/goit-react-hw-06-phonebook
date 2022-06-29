import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactSlice from "./contact-reducer/contact-reducer";

const persistConfig = {
  key: "contacts",
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlice);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);
