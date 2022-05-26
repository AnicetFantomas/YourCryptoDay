import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCryptoDetails } from '../Redux/FetchDtails';

const ShowDetails = () => {
  const getAllDetails = useSelector((state) => state.cryptos);
  console.log(getAllDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoDetails());
  }, [dispatch]);

  const { cryptoSymb } = useParams();
  const cryptos = getAllDetails?.filter((item) => item.cryptoSymb === cryptoSymb);

  return (
    <div>
      <h1>Hello World</h1>
      {cryptos.map((detail) => (
        <div key={detail.cryptoSymb} className="details">
          <div>{detail.cryptoSymb}</div>
          <ul>
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
              <p className="placeholder">lastQty: </p>
              <p className="detail-data">{detail.lastQty}</p>
            </li>
            <li>
              <p className="placeholder">bidPrice: </p>
              <p className="detail-data">{detail.bidPrice}</p>
            </li>
            <li>
              <p className="placeholder">bidQty: </p>
              <p className="detail-data">{detail.bidQty}</p>
            </li>
            <li>
              <p className="placeholder">askPrice: </p>
              <p className="detail-data">{detail.askPrice}</p>
            </li>
            <li>
              <p className="placeholder">askQty: </p>
              <p className="detail-data">{detail.askQty}</p>
            </li>
            <li>
              <p className="placeholder">highPrice: </p>
              <p className="detail-data">{detail.highPrice}</p>
            </li>
            <li>
              <p className="placeholder">lowPrice: </p>
              <p className="detail-data">{detail.lowPrice}</p>
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
