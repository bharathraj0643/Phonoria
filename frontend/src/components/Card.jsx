import React from 'react'
import cardcss from "./card.module.css"


export default function Card() {
  return (
    <div className={cardcss.h5}>
        <img src="https://picsum.photos/200/300.jpg" alt="images" />
        <h5>Nature</h5>
        <p className={cardcss.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
        <p className={cardcss.rating}>5 <span>&#9733;</span></p>
        <span className={cardcss.price}>$100</span>
        <button className="btn">Add to Cart</button>
        <button className="btn">Buy Now</button>
        <button className={cardcss.wishlist}>&hearts;</button>

      

    </div>
  )
}
