import React from 'react'
import Item from '../Item/Item'

function ItemListContainer() {
  return (
    <div>
     <Item title="remera"  imgurl="/images/nombre.png" price={3000}  detail="Lorem ipsum"/>
     <Item title="pantalon"  imgurl="/images/nombre.png" price={5000} detail="Lorem ipsum"/>
     <Item title="buzo"  imgurl="/images/nombre.png" price={2000} detail="Lorem ipsum"/>
    </div>
  )
}

export default ItemListContainer