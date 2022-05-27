import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.binance.com/api/v1/ticker/24hr';

export const fetchCryptoDetails = createAsyncThunk(
  'stats/FETCH_CRYPTO_DETAILS',
  async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    const getData = data.map((detail) => ({
      cryptoSymb: detail.symbol,
      priceChange: detail.priceChange,
      priceChangePercent: detail.priceChangePercent,
      weightedAvgPrice: detail.priceChangePercent,
      prevClosePrice: detail.prevClosePrice,
      lastPrice: detail.lastPrice,
      lastQty: detail.lastQty,
      bidPrice: detail.bidPrice,
      bidQty: detail.bidQty,
      askPrice: detail.askPrice,
      askQty: detail.askQty,
      highPrice: detail.highPrice,
      lowPrice: detail.lowPrice,
      volume: detail.volume,
    }));
    return getData;
  },
);

export const detailsSlice = createSlice({
  name: 'reduce/FETCH_CRYPTO_DETAILS',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchCryptoDetails.fulfilled]: (state, action) => action.payload,
  },
});

export const { updateDetails } = detailsSlice.actions;
export default detailsSlice.reducer;
