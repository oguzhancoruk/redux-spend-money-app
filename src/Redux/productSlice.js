import {  createSlice } from "@reduxjs/toolkit";
import productsData from '../product.json'
const data= productsData

export const productSlice=createSlice({
    name:"products",
    initialState:{
        items:data.products,

    },
    reducers:{
  

    },
})

export default productSlice.reducer