import React from 'react'
import {useSelector} from 'react-redux'
function Money() {
  const money = useSelector(state => state.products.money);
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
  
  });
  return (
    <div>
      <h1>{formatter.format(money)}</h1></div>
  )
}

export default Money

