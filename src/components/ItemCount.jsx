import React, { useState } from 'react'

export const ItemCount = () => {

    const [count, setCount] = useState(1)
    const decrease = () => {
        setCount(count-1);
    }
    const increase = () => {
        setCount(count+1)
    }


  return (
    <div className='counter'>
        <button className='button-masmenos' disabled={count <= 1} onClick={decrease}>-</button>
        <span>{count}</span>
        <button className='button-masmenos'  disabled={count >= 50} onClick={increase}>+</button>
       
            <button className="button-buy">  Agregar al carrito</button>
        
    </div>
  )
}

export default ItemCount