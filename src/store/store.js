import {configureStore} from "@reduxjs/toolkit";
import fetchCategoryWiseSlice from './slices/fetchCategoryWise'
import buyAuction from './slices/auctionBuyData';

const store = configureStore({
    reducer: {
        fetchCategory:fetchCategoryWiseSlice,
        buyAuction:buyAuction,
        
    }
});

export default store;


