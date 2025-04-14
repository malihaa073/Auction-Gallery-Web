import { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import './App.css'
import Navbar from './Components/banners/Navbar/Navbar';
import Banner from './Components/banners/Banner/Banner';
import Auctionss from './Components/banners/Auctions/Auctionss';
import { useRef } from 'react';
import Footer from './Components/banners/footer/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //const [count, setCount] = useState(0)
  const auctionRef = useRef(null);

  const [heartShape, setHeartShape] = useState([]);
 const handleHeartButton =(data) =>{
   const alreadyExists = heartShape.find(item => item.id === data.id);
   if (!alreadyExists) {
     setHeartShape([...heartShape, data]);
     toast.success("Item added to favourites!");
   } else {
     toast.info("Item already in favourites!");
   }
   
 
 }
 const handleRemoveFavorite = (index) => {
   const updatedFavorites = heartShape.filter((item, i) => i !== index);
   ;
   setHeartShape(updatedFavorites);
 };
 
 let totalBidAmount = 0;
 heartShape.forEach(item => {
   totalBidAmount += parseFloat(item.currentBidPrice);
 });
 console.log(heartShape)
  return (
    <>
        <Navbar  scrollToAuction={() => auctionRef.current.scrollIntoView({ behavior: 'smooth' })}></Navbar>
      <Banner  scrollToAuction={() => auctionRef.current.scrollIntoView({ behavior: 'smooth' })}></Banner>
      <ToastContainer position="top-right" autoClose={2000} />
      <div ref={auctionRef} className='bg-[#EBF0F5] pb-10'>
      <h1 className='text-2xl  text-black pt-12 pl-24'>Active Auctions</h1>
      <p className='text-black pl-24'>Discover and bid on extraordinary items</p>
      <div className="main-container flex text-center mx-5 bg-[#EBF0F5]">
        
         <div className='left w-[70%]  pb-20 bg-white border-2 ml-18 mt-5 rounded-2xl'>
         <Auctionss 
         handleHeartButton={handleHeartButton} 
      
          handleRemoveFavorite={handleRemoveFavorite}
          heartShape={heartShape}
          >  </Auctionss>
         </div>

        <div className='  w-[30%] mr-4 ml-3 pr-3 bg-white mt-5  rounded-2xl   self-start '>
        <div className="overflow-x-auto">
      <table className="  table-auto w-full text-center rounded-2xl border border-gray-300">
      {/* First Row */}
     <thead>
     <tr>
  <th colSpan="2" className="text-xl text-black py-4 text-center">
    <span className="inline-flex items-center justify-center gap-2">
      <CiHeart className="text-2xl text-red-500" />
      Favourite Items
    </span>
  </th>
</tr>
      </thead>

    {/* Second Row */}
    <tbody>
      {
        heartShape.length === 0 ?(
          <tr>
        <td colSpan="2" className="text-gray-500 py-4">
          No favourites yet.
        </td>
      </tr>
        ):(
          <>
          {heartShape.map((item, index) => (
    <tr key={index} className="border-t border-gray-300">
    <td colSpan="2" className="flex justify-between items-center py-2 px-3">
      {/* Left side: image and text */}
      <div className="flex items-center gap-3">
        <img src={item.image} alt={item.title} className="h-24 w-24 rounded-md" />
        <div className="text-left">
          <p className="text-black text-sm font-semibold">{item.title}</p>
          <div className="flex justify-between text-xs text-gray-600 w-[180px]">
            <span>Bid: ${item.currentBidPrice}</span>
            <span>Bids: {item.bidsCount}</span>
          </div>
        </div>
      </div>

      {/* Right side: cross button */}
      <button
        onClick={() => handleRemoveFavorite(index)}
        className="text-red-500 hover:text-red-700 pl-24 text-lg font-bold"
        title="Remove"
      >
        ×
      </button>
    </td>
  </tr>
))}

        </>
      )
        
      }
      

      {/* Third Row */}
      <tr className="border-t border-gray-300">
        <td className="text-black font-semibold py-3 text-left pl-2">Total Bids Amount</td>
        <td className="text-black py-3 px-5 pr-32">
        ${totalBidAmount.toFixed(2)}
</td>
      </tr>

    </tbody>
  </table>
</div>

       
        </div>
      </div>
      
      </div>

      <Footer>

      </Footer>
    </>
  )
}

export default App
