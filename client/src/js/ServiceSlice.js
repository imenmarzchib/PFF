import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios"
export const getService=createAsyncThunk("service/get",async()=>{
    try{
       let result=axios.get("http://localhost:5000/service/");
       return result;
    }catch(error){
      console.log(error);

    }

});
export const addService=createAsyncThunk("service/add",async(service)=>{
    try{
       let result=axios.post("http://localhost:5000/service/add",service);
       return result;
    }catch(error){
      console.log(error);

    }

});
export const deleteService=createAsyncThunk("service/delete",async(id)=>{
    try{
       let result=axios.delete(`http://localhost:5000/service/${id}`);
       return result;
    }catch(error){
      console.log(error);

    }

})
export const updateService=createAsyncThunk("service/update",async({id,edited})=>{
    try{
       let result=axios.put(`http://localhost:5000/service/${id}`,edited);
       return result;
    }catch(error){
      console.log(error);

    }

})
const initialState = {
  services:null,
  status:null,
};

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers:{
    [getService.pending]:(state)=>{
        state.status="pending";
    },
    [getService.fulfilled]:(state,action)=>{
        state.status="fulfilled";
        state.services=action.payload.data.services;
    },
    [getService.rejected]:(state)=>{
        state.status="rejected";
    },
    [addService.pending]:(state)=>{
        state.status="pending";
    },
    [addService.fulfilled]:(state)=>{
        state.status="fulfilled";
        
    },
    [addService.rejected]:(state)=>{
        state.status="rejected";
    },
    [deleteService.pending]:(state)=>{
        state.status="pending";
    },
    [deleteService.fulfilled]:(state)=>{
        state.status="fulfilled";
        
    },
    [deleteService.rejected]:(state)=>{
        state.status="rejected";
    },
    [updateService.pending]:(state)=>{
        state.status="pending";
    },
    [updateService.fulfilled]:(state)=>{
        state.status="fulfilled";
        
    },
    [updateService.rejected]:(state)=>{
        state.status="rejected";
    },
  },
   
  
});

// Action creators are generated for each case reducer function
export const { } = serviceSlice.actions

export default serviceSlice.reducer
