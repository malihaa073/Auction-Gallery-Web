import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white flex flex-col items-center pt-24 pb-16'>
        {/* Heading */}
        <h3 className='text-2xl text-purple-300 font-semibold text-center'>
          Auction
          <span className="text-yellow-400 font-bold">Gallery</span>
        </h3>
        <div className=" md:flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-black font-sora text-[22px] font-normal leading-[28px] tracking-normal ">Bid.</a></li>
            <li><a className="text-black font-sora text-[22px] font-normal leading-[28px] tracking-normal ">Win.</a></li>
            <li><a className="text-black font-sora text-[22px] font-normal leading-[28px] tracking-normal ">Own.</a></li>
          </ul>
        </div>
        <div className=" md:flex justify-center">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-black font-poppins text-[18px] font-normal leading-[27px] tracking-normal text-left">Home</a></li>
            <li><a className="text-black font-poppins text-[18px] font-normal leading-[27px] tracking-normal text-left">Auctions</a></li>
            <li><a className="text-black font-poppins text-[18px] font-normal leading-[27px] tracking-normal text-left">Categories</a></li>
            <li><a className="text-black font-poppins text-[18px] font-normal leading-[27px] tracking-normal text-left">How it works</a></li>
          </ul>
        </div>
      
        {/* Footer */}
        <footer className="footer sm:footer-horizontal bg-white footer-center text-base-content p-4">
          <aside>
            <p className='text-black'>
              Copyright © {new Date().getFullYear()} - AuctionHub. All rights reserved.
            </p>
          </aside>
        </footer>   
      </div>
      
    );
};

export default Footer;