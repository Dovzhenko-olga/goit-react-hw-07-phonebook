import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReduser from './contacts/contact-reduser';
// import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contact',
//   storage,
//   blacklist: ['filter'],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const store = configureStore({
  reducer: {
    contact: contactsReduser,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

// const persistor = persistStore(store);

// const storeObject = {
//   store,
//   persistor,
// };

export default store;