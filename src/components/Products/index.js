import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { updateProduct } from '../../Redux/productSlice';
import './styles.css'



function Product({id}) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
  
  });
  
  
const product=useSelector(state=>state.products.items);
const money=useSelector(state=>state.products.money);
const initialMoney=useSelector(state=>state.products.initialMoney);

const item =product.find((res)=>res.id===id);
 const dispatch=useDispatch();


const [count,setCount]=useState(item.count);
console.log(initialMoney)
const [isBuyable,setisBuyable] =useState(false);

const [isSellable,setisSellable] =useState(true);
let maximumBuy=Math.floor(money/item.productPrice);
let maximum=Number(count)+Number(maximumBuy);

useEffect(()=>{
  dispatch(updateProduct({id:item.id,count:count}))
  control();
},[count]);

useEffect(() => {
  if(item.productPrice>money ){
    setisBuyable(true);
  }
  if(product.productPrice<=money ){
    setisBuyable(false);
  }
}, [money]);

const buy =()=>{
  handleChange(Number(count)+1);
}

const sell =()=>{
  handleChange(Number(count)-1);
}

const control =()=>{
  if(count > 0){
    setisSellable(false);
  }
  if(count == 0){
    setisSellable(true);
  }
}

const handleChange = (value) =>{
  if(value>maximum && money>0 ){
    setCount(maximum)
  }
  else if(value<0){
    setCount(0);
  }
  else if(money ==0 && value<count){
    setCount(value);
  }
  else{
    setCount(value);
  }
}


  return (

    <div >
      <div className='row  justify-content-center '>
        <div className=' col-sm-11 text-center  mt-3  border ' >
            <div  className='justify-content-center col-sm'>
              <img  className='product_img' src={item.image} alt="" />
                
            </div>
             <h2>{item.productName}</h2>
             <h6>{formatter.format(item.productPrice)}</h6>

             <div className=' col-sm mb-3'> 
               <button onClick={()=>sell()} disabled={isSellable} className=' btn me-4 btn-danger'>sell</button>
               <input  value={count} onChange={(e)=>handleChange(e.target.value)}
               onKeyPress={(event) => {
               if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
      } }/>
               <button  disabled={isBuyable}  onClick={ ()=>buy()}  className=' btn ms-4 btn-success'>buy</button>
             </div>

          </div>
          
    
       
       

 

       

</div>
     
    </div>
  )
}

export default Product