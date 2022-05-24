import React from 'react';
import { useEffect } from 'react';
import './Styles/Home.css'
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
                 {crypto.cryptoSymb}  
                 {crypto.priceChangePercent}%
                </li>))}
            </ul>
        </div>
    );
};

export default HomePage;