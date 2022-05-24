import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://www.balldontlie.io/api/v1/season_averages'

export const fetchPlayers = createAsyncThunk(
    'stats/FETCH_STATS',
    async () => {
        const res = await fetch(baseUrl);
        const data = await res.json();
        const dataObj = data.data;
        console.log(dataObj);
        const getData = dataObj.map((player) => ({
            id: player.id,
            gamePlayed: player.games_played,
            minAverage: player.min,
            rebounds: player.reb,
            assists: player.ast,
            steals: player.stl,
            blocks: player.blk,
            points: player.pts,
            
        }));
        return getData;
    }  
)

export const playerSlice = createSlice({
    name: 'reduce/FETCH_PLAYER',
    initialState:[],
    reducers: {
        updatePlayer: (state, action) => state.map((player) => {
            if(player.id === action.payload) {
                return {...player}
            }
            return player
        })
        ,
    },
    extraReducers: {
        [fetchPlayers.fulfilled]: (state, action) => action.payload,
    },
});

export const { updatePlayer } = playerSlice.actions;
export default playerSlice.reducer;