import { configureStore } from "@reduxjs/toolkit";
import playersReducer from '../Redux/FetchStats';

const store = configureStore({
    reducer: {
        players: playersReducer
    },
})

export default store;
