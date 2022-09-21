import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
export const getreserv=createAsyncThunk("reservation/get",async()=>{
    try{
       let result=axios.get("http://localhost:5000/reservation/");
       return result;
    }catch(error){
      console.log(error);

    }
    

});
export const addreserv=createAsyncThunk("reservation/add",async(reservation)=>{
    try{
       let result=axios.post("http://localhost:5000/reservation/add",reservation);
       return result;
    }catch(error){
      console.log(error);

    }

});
export const deletereserv=createAsyncThunk("reservation/delete",async(id)=>{
    try{
       let result=axios.delete(`http://localhost:5000/reservation/${id}`);
       return result;
    }catch(error){
      console.log(error);

    }

})

const initialState = {
  reservations:null,
  status:null,
};

export const reservation= createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers:{
    [getreserv.pending]:(state)=>{
        state.status="pending";
    },
    [getreserv.fulfilled]:(state,action)=>{
        state.status="fulfilled";
        state.reservations=action.payload.data.reservation;
    },
    [getreserv.rejected]:(state)=>{
        state.status="rejected";
    },
    [addreserv.pending]:(state)=>{
        state.status="pending";
    },
    [addreserv.fulfilled]:(state)=>{
        state.status="fulfilled";
        
    },
    [addreserv.rejected]:(state)=>{
        state.status="rejected";
    },
    [deletereserv.pending]:(state)=>{
        state.status="pending";
    },
    [deletereserv.fulfilled]:(state)=>{
        state.status="fulfilled";
        
    },
    [deletereserv.rejected]:(state)=>{
        state.status="rejected";
    },
   
  },
   
  
});

// Action creators are generated for each case reducer function
export const { } = reservation.actions

export default reservation.reducer
