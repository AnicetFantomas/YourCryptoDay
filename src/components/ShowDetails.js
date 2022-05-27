import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Styles/details.css';
import { Link, useParams } from 'react-router-dom';
import { fetchCryptoDetails } from '../Redux/FetchDtails';
import backHomeImg from './Images/back.png';

const ShowDetails = () => {
  const getAllDetails = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoDetails());
  }, [dispatch]);

  const { cryptoSymb } = useParams();
  const cryptos = getAllDetails?.filter((item) => item.cryptoSymb === cryptoSymb);

  return (
    <div>
      {cryptos.map((detail) => (
        <div key={detail.cryptoSymb} className="details">
          <div className="back-link d-flex">
            <Link to="/">
              <img className="backHome" src={backHomeImg} alt="back-icon" />
            </Link>
          </div>
          <div className="detail-header">
            <div className="symbol">
              <div className="symbol-headline">{detail.cryptoSymb}</div>
              <div className="prices d-flex">
                <div> Prices today:</div>
                {' '}
                <div className="prices-para">
                  <p>
                    High:
                    {' '}
                    {detail.highPrice}
                  </p>
                  <p>
                    Low:
                    {' '}
                    {detail.lowPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ul className="list-container d-flex">
            <li>
              <p className="placeholder">Price change:</p>
              <p className="detail-data">{detail.priceChange}</p>
            </li>
            <li>
              <p className="placeholder">price Change Percent: </p>
              <p className="detail-data">{detail.priceChangePercent}</p>
            </li>
            <li>
              <p className="placeholder">weighted Average price: </p>
              <p className="detail-data">{detail.priceChangePercent}</p>
            </li>
            <li>
              <p className="placeholder">previous close price: </p>
              <p className="detail-data">{detail.prevClosePrice}</p>
            </li>
            <li>
              <p className="placeholder">last Price: </p>
              <p className="detail-data">{detail.lastPrice}</p>
            </li>
            <li>
              <p className="placeholder">last Quantity: </p>
              <p className="detail-data">{detail.lastQty}</p>
            </li>
            <li>
              <p className="placeholder">bid Price: </p>
              <p className="detail-data">{detail.bidPrice}</p>
            </li>
            <li>
              <p className="placeholder">bid Quantity: </p>
              <p className="detail-data">{detail.bidQty}</p>
            </li>
            <li>
              <p className="placeholder">ask Price: </p>
              <p className="detail-data">{detail.askPrice}</p>
            </li>
            <li>
              <p className="placeholder">ask Quantity: </p>
              <p className="detail-data">{detail.askQty}</p>
            </li>
            <li>
              <p className="placeholder">volume: </p>
              <p className="detail-data">{detail.volume}</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShowDetails;
