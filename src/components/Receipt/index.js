import React from 'react'
import { useSelector } from 'react-redux'



function İndex() {

    const item=useSelector((state)=>state.products.items);
    const filtered=item.filter((res)=>res.count>0)
    let setMoney=0;
    filtered.map((res)=>setMoney+=(res.count)*(res.productPrice))
    

    if(filtered.length===0){
        return null
    }


  return (
     
        <div className=' container mt-3 '>

           
        <div className='row product' >
          <div className='row  col-sm-12 justify-content-center    '>
              <div className=' col-sm-4  '>
              <h3 className='mt-3 text-center'>Your Receipt</h3>
              {
                  filtered.map((res)=>( <h5 key={res.id}>{res.productName}----{'> '}x{res.count}---{setMoney}</h5>))
              }
             
              </div>
          </div>
          </div>
    </div>
    
   
  )
}

export default İndex