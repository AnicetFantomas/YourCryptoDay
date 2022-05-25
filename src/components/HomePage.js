import React from 'react';
import { useEffect } from 'react';
import './Styles/Home.css'
import arrow from './Images/arrow.png'
import { useSelector, useDispatch } from 'react-redux';
import { fetchCrypto } from '../Redux/FetchStats';

const HomePage = () => {
    const getAllCryptos = useSelector((state) => state.cryptos);
    console.log(getAllCryptos);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!getAllCryptos.length) dispatch(fetchCrypto())
    }, [dispatch])

    return (
        <div>
            <ul>
                {getAllCryptos.map((crypto) => (
                <li key={crypto.cryptoSymb}>
                <div ><img src={arrow} className="image" /></div>
                <div className="text-container">
                <div className="symbole">{crypto.cryptoSymb}</div>  
                 <span>{crypto.priceChangePercent}%</span>
                 <p>{crypto.prevClosePrice}</p>
                </div>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;