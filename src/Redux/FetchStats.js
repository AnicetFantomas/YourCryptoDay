import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://api.binance.com/api/v1/ticker/24hr'

export const fetchCrypto = createAsyncThunk(
    'currency/FETCH_CRYPTO',
    async () => {
        const res = await fetch(baseUrl);
        const data = await res.json();
        // console.log(data);
        const getData = data.map((crypto) => ({
            cryptoSymb: crypto.symbol,
            priceChangePercent: crypto.priceChangePercent,
        }));
        return getData;
    }  
)

export const cryptoSlice = createSlice({
    name: 'reduce/FETCH_CRYPTO',
    initialState:[],
    reducers: {
        updateCrypto: (state, action) => state.map((crypto) => {
            if(crypto.id === action.payload) {
                return {...crypto}
            }
            return crypto
        })
        ,
    },
    extraReducers: {
        [fetchCrypto.fulfilled]: (state, action) => action.payload,
    },
});

export const { updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;