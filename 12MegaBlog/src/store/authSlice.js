//this slice for tracking user authentication hum log store se har baar puchege ki user authenticated hai ya nhi

import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,
    userData : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login : (state , action) =>{
            state.status = true;
            state.userData = action.payload.userData;

        },
        logout :(state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login , logout} =authSlice.actions
export default authSlice.reducer;
