import cryptoaReducer, { fetchCryptoDetails } from '../Redux/FetchDtails';

it('fetchCryptoDetails should return a promise', () => {
  expect(fetchCryptoDetails()).toEqual(expect.any(Function));
});

it('Expect cryptoaReducer to handle getS', () => {
  expect(cryptoaReducer({}, [fetchCryptoDetails.fulfilled])).not.toBeNull();
});
