import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from '../Redux/FetchStats';
import detailsReducer from '../Redux/FetchDtails'

const store = configureStore({
    reducer: {
        cryptos: cryptoReducer,
        details: detailsReducer
    },
})

export default store;
