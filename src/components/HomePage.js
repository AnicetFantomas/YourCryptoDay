import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPlayers } from '../Redux/FetchStats';

const HomePage = () => {
    const getAllPlayers = useSelector((state) => state.players);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!getAllPlayers.length) dispatch(fetchPlayers())
    }, [dispatch])

    return (
        <div>
            <ul>
                {getAllPlayers.map((player) => (<li key={player.id}>{player.firstN} {player.lastN} {' '} {player.team}</li>))}
            </ul>
        </div>
    );
};

export default HomePage;