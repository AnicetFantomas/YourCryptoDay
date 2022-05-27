import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import userIcon from './Images/user.png';
import './Styles/Home.css';
import arrow from './Images/arrow.png';
import searchIcon from './Images/search.png';
import { fetchCryptoDetails } from '../Redux/FetchDtails';

const HomePage = () => {
  const getAllCryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  const [initialSearch, setSearch] = useState('');
  const matchedCryptos = getAllCryptos.filter((item) => item.cryptoSymb
    .toLowerCase().includes(initialSearch.toLowerCase()));

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!getAllCryptos.length) dispatch(fetchCryptoDetails());
  }, [dispatch]);

  return (
    <>
      <div className="logo-container disp-flex">
        <div className="logo asef-center">
          Your
          <span>Crypto</span>
          Day
        </div>
        <div><img className="user-icon asef-center" src={userIcon} alt="user-icon" /></div>
      </div>
      <div className="header">
        <div className="header-text asef-center">
          <p>Start The day with coffee,</p>
          <p>End The day with crypto</p>
        </div>
      </div>
      <div>
        <div className="search-container disp-flex">
          <p className="top-cryptos">Top 50 current cryptos</p>
          <div className="search-box disp-flex">
            <input
              type="search"
              placeholder="search..."
              onChange={handleChange}
              value={initialSearch}
              className="input"
            />
            <div className="search-img-cont disp-flex"><img className="search-icon asef-center" src={searchIcon} alt="search-icon" /></div>
          </div>
        </div>
      </div>
      <div className="samples-container">
        {matchedCryptos.slice(0, 51).map((crypto) => (
          <Link to={`crypto/${crypto.cryptoSymb}`} className="sample" key={crypto.cryptoSymb}>
            <div><img src={arrow} className="image" alt="arrow" /></div>
            <div className="text-container">
              <div className="symbole">{crypto.cryptoSymb}</div>
              <span>
                {crypto.priceChangePercent}
                %
              </span>
              <p>{crypto.prevClosePrice}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default HomePage;
