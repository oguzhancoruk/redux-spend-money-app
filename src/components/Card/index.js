import React from 'react'

import {useSelector} from 'react-redux';
import Product from '../Products/index'


function İndex() {
    const item= useSelector(state => state.products.items);
    
  return (
      <div className='container'> 
    <div className='row '>
        

        {
            item.map((res)=>(
                <div className='col-sm-4'>
                <Product id={res.id}/>
                </div>
            ))
        }
     </div></div>
  )
}

export default İndex