import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
const Auction = ({auction , handleHeartButton, heartShape}) => {
    const isFavorited = heartShape.some(item => item.id === auction.id);
    console.log(handleHeartButton)
    return (
        <tr className='border-b border-gray-300'>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={auction.image} alt={auction.title} />
              </div>
            </div>
            <div className='mzx-w-[150px]'>
              <p className='text-black '>{auction.title}</p>
            </div>
          </div>
        </td>
        <td>
          <p className='text-black text-center '>${auction.currentBidPrice}</p>
        </td>
        <td>
          <p className='text-black text-center'>{auction.timeLeft}</p>
        </td>
        <td>
        <button
  onClick={() => handleHeartButton(auction)}
  className={`flex justify-center items-center pl-3 text-2xl ${
    isFavorited
      ? 'text-red-500 cursor-not-allowed'
      : 'text-gray-400 hover:text-red-500 cursor-pointer'
  }`}
  disabled={isFavorited}
  title={isFavorited ? "Already Favorited" : "Add to Favorites"}
>
  {isFavorited ? <FaHeart /> : <CiHeart />}
</button> 
</td>
        
      </tr>
    );
};

export default Auction;