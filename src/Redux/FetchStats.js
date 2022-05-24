import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = 'https://www.balldontlie.io/api/v1/players'

export const fetchPlayers = createAsyncThunk(
    'stats/FETCH_PLAYER',
    async () => {
        const res = await fetch(baseUrl);
        const data = await res.json();
        const dataObj = data.data;
        // console.log(dataObj);
        const getData = dataObj.map((player) => ({
            id: player.id,
            firstN: player.first_name,
            lastN: player.last_name,
            team: player.team.full_name
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