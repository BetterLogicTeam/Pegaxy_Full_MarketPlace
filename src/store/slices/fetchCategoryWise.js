import {createSlice} from '@reduxjs/toolkit';

let initialState = {
    isLoading:false,
    success:false,
    data:[]
}
const slice = createSlice ({
    name:"fetchCategoryWise",
    initialState,
    reducers: {
        setIsLoading(state, action){
            state.isLoading = true;
        },
        setData(state, action){
            state.isLoading = false;
            state.data = action.payload;
            state.success = true;
        },
        hasError(state, action){
            state.isLoading = false;
            state.success = false;
        }
    }
});

export default slice.reducer;

export const fetchCategoryWise = () => {
    return async (dispatch) => {
        dispatch(slice.actions.setIsLoading());
        try {
            
        } catch (error) {
            dispatch(slice.actions.hasError())
        }
    }
}