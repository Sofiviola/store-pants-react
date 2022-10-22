import React from 'react'
import item from "./item.css"

function Item(props) {
  return (
    <div className='card'>
     <div className='card-img'>
        <img src={props.imgurl} alt="Product"></img>
     </div>
     <div className='card-detail'>
       <h2>{props.title}</h2>
       <p>{props.detail}</p>
       <h4 className="card-price">${props.price}</h4>
     </div>
    </div>
  )
}

export default Item
