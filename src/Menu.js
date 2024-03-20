import React from 'react'
import { useCart } from 'react-use-cart';

const Menu = (props) => {

  const {addItem} = useCart();

  return (
    <>
        <div className="menu-box" key={props.id}>
            <img src={props.image} alt="img" />
            <h3>{props.title}</h3>
            <p>Price: ₹ {props.price}</p>
            <div><button className='btn' onClick={() => addItem(props.curele)}>{props.button}</button></div>
        </div>
    </>
  )
}

export default Menu