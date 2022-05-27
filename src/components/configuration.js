import { configureStore } from '@reduxjs/toolkit';
import cryptoaReducer from '../Redux/FetchDtails';

const store = configureStore({
  reducer: {
    cryptos: cryptoaReducer,
  },
});

export default store;
