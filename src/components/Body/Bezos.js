import React from 'react'
import Money from './Money'

function Bezos() {
  return (
    <div className='container mt-3'>
    <div className='bg-light'>
        <div className='text-center '>
            <img style={{width:"300px",height:"300px",marginTop:"30px"}} className='rounded-circle' src="https://cdnntr1.img.sputniknews.com/img/07e5/0b/0f/1050818989_140:0:940:800_1920x0_80_0_0_ccfde0cbf3873ab59492b4e51a5732bd.jpg" alt="" />
            <h1 className='mt-5'>Spend Jeff Bezos' Money</h1>

        </div>
       <div  className='text-center mt-3 bg-primary'><Money/></div> 
        
    </div></div>
  )
}

export default Bezos