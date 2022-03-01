import {  createSlice } from "@reduxjs/toolkit";
import productsData from '../product.json'
const data= productsData.products;

export const productSlice=createSlice({
    name:"products",
    initialState:{
        items:data,
        money: 100000000000,
        initialMoney:100000000000,
    },
    reducers:{
  updateProduct:(state,action)=>{
   const {id,count}=action.payload;
   const item=state.items.find((res)=>res.id===id);
 item.count=count;
   let price=0

   state.items.map((res)=>{
       price+=Number(res.count)*Number(res.productPrice);
   });
   state.money=Number(state.initialMoney)-Number(price);

  }
    },
})
export const {updateProduct}=productSlice.actions;
export default productSlice.reducer