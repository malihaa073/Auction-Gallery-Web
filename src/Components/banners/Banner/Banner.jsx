import React from 'react';
import ban from './ban.jpg';
const Banner = ({scrollToAuction }) => {
    return (
<div className="w-full bg-white">
  <div className="relative w-full max-h-[730px] overflow-hidden">
    {/* Background Image */}
    <img
      src={ban}
      alt="Background"
      className="w-full h-[730px] object-cover"
    />

    {/* Text Content Positioned on Left Center */}
    <div className="absolute top-1/2 left-24 -translate-y-1/2 text-white max-w-md">
      <h2 className="text-4xl font-bold mb-4 font-sora">Bid on Unique Items from Around the World</h2>
      <p className="mb-6">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
      <button onClick={scrollToAuction} className="btn rounded-xl text-black bg-white border-none text-center px-[16px] py-[23px]">Explore Auctions</button>
    </div>
  </div>
</div>

    );
};

export default Banner;