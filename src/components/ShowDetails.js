import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCryptoDetails } from '../Redux/FetchDtails';

const ShowDetails = () => {
    const getAllDetails = useSelector((state) => state.details);
    console.log(getAllDetails)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!getAllDetails.length) dispatch(fetchCryptoDetails())
    }, [dispatch])

    return (
        <div>
            <ul>
                {getAllDetails.map((detail) => (<li key={detail.cryptoSymb}>{detail.cryptoSymb}</li>))}
            </ul>
        </div>
    );
};

export default ShowDetails;