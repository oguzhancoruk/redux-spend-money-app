import React from 'react'
import {useSelector} from 'react-redux'



function Product() {
  
const product=useSelector((state)=>state.products.items);

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',


});



  return (

    <div >
      <div className='row  justify-content-center '>
     
       {
         product.map((res)=>(
           
          <div className=' col-sm-3 text-center mt-3 ms-3 border ' >
            <div  className='justify-content-center'>
              <img  style={{width:'auto',height:'110px'}}  src={res.image} alt="" />
                
            </div>
             <h2>{res.productName}</h2>
             <h6>{formatter.format(res.productPrice)}</h6>

             <div className='mb-3'> 
               <button className=' btn me-4 btn-danger'>sell</button>
               <input  className='input' style={{width:"70px"}} onKeyPress={(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }} />
               <button className=' btn ms-4 btn-success'>buy</button>
             </div>

          </div>
          
    
         ))
       }

 

       

</div>
     
    </div>
  )
}

export default Product