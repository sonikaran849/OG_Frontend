import React from 'react'
import  "../Watch/WatchCard.css"
const WatchCard = ({product}) => {
  return (
    <div>
      <div className="watchCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-top"
          src={product.imageUrl}
          alt=""
        />
      </div>

      <div className="text-part bg-white p-3">
        <div>
          <p className="font-bold opacity-80">{product.brand}</p>
          <p>{product.title}</p>
        </div>

        <div className="flex items-center space-x-2 pl-7">
          <p className="font-semibold">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">₹{product.price}</p>
          <p className="text-green-600 font-semibold">{product.discountedPercent} % off</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WatchCard
