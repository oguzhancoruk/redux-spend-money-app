import React from 'react'
import Money from './Money'

function Bezos() {
  return (
    <div className='container bg-light'>
        <div className='text-center '>
            <img style={{width:"300px",height:"250px",marginTop:"30px"}} className='rounded-circle' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT" alt="" />
            <h1 className='mt-5'>Spend Jeff Bezos' Money</h1>

        </div>
       <div  className='text-center mt-3 bg-primary'><Money/></div> 
        
    </div>
  )
}

export default Bezos