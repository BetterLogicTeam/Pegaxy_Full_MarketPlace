import {
    createSlice
} from '@reduxjs/toolkit';
import axios from 'axios';

let baseURL = process.env.REACT_APP_API_URL;
console.log("baseURL", baseURL);
let initialState = {
    isLoading: false,
    success: false,
    buyAuctionData: []
}

const slice = createSlice({
    name: "buyAuction",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = true;
        },
        setBuyAutctionData(state, action) {
            state.isLoading = false;
            state.success = true;
            state.buyAuctionData = action.payload;
        },
        hasError(state, action) {
            state.isLoading = false;
            state.success = false;
        }
    }
});

export default slice.reducer;

export const fetchAuctionBuyData = (opt) => {
    return async (dispatch) => {
        dispatch(slice.actions.setLoading());
        try {
            if (opt == "all") {
                let res = await axios.get(`${baseURL}/nftmarketplace_history?id=100`);
                dispatch(slice.actions.setBuyAutctionData(res.data.data));
            }else if(opt == "buyNow"){
                let res = await axios.get(`${baseURL}/sell_marketplace_history?id=100`);
                dispatch(slice.actions.setBuyAutctionData(res.data.data));
            }else if(opt == "auction"){
                let res = await axios.get(`${baseURL}/OnAuction_marketplace_history?id=100`);
                dispatch(slice.actions.setBuyAutctionData(res.data.data));
            }
        } catch (error) {
            console.log("error while fetch Auction Buy Data", error);
            dispatch(slice.actions.hasError())
        }
    }
}