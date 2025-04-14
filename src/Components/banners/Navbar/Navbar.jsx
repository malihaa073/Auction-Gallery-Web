import React from 'react';

const Navbar = ({scrollToAuction }) => {
    return (
        <div className="navbar bg-white shadow-sm text-black justify-between px-4">
        {/* Left - Brand Name */}
        <div className="flex items-center">
        <a className="text-2xl font-semibold text-purple-500 absolute left-18 hover:bg-transparent">
  Auction<span className="text-yellow-500 font-bold">Gallery</span>
</a>
        </div>
      
        {/* Center - Menu Items */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul className="menu menu-horizontal px-1">
            <li><a className="text-black hover:text-white hover:bg-gray-500 font-poppins text-[22px] font-normal leading-[33px] tracking-normal text-left">Home</a></li>
            <li><a  onClick={scrollToAuction} className="text-black hover:text-white hover:bg-gray-500 font-poppins text-[22px] font-normal leading-[33px] tracking-normal text-left">Auctions</a></li>
            <li><a className="text-black hover:text-white hover:bg-gray-500 font-poppins text-[22px] font-normal leading-[33px] tracking-normal text-left">Categories</a></li>
            <li><a className="text-black hover:text-white hover:bg-gray-500 font-poppins text-[22px] font-normal leading-[33px] tracking-normal text-left">How it works</a></li>
          </ul>
        </div>
      
        {/* Right - Notification & Profile */}
        <div className="flex items-center gap-3 pr-4">
          {/* Notification */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-circle bg-[#EBF0F5] border border-black">
              <div className="indicator p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#0E2954"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </div>
          </div>
      
          {/* Profile */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border border-black">
                <img
                  alt="Profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu bg-white menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      
    );
};

export default Navbar;