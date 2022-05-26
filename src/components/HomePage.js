import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Home.css';
import { useSelector, useDispatch } from 'react-redux';
import arrow from './Images/arrow.png';
import { fetchCryptoDetails } from '../Redux/FetchDtails';

const HomePage = () => {
  const getAllCryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!getAllCryptos.length) dispatch(fetchCryptoDetails());
  }, [dispatch]);

  return (
    <div className="samples-container">
      {getAllCryptos.map((crypto) => (
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
  );
};

export default HomePage;
