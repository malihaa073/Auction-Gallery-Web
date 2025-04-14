import React, { useEffect } from 'react';
import { useState } from 'react'
import Auction from '../Auction-s/Auction';
const Auctionss = ({handleHeartButton, heartShape }) => {
    const [fetchData, setFetchData] = useState([]);
    useEffect(()=>{
        fetch('file.json').then((res) => res.json())
        .then(data => setFetchData(data))
    },[]);
   // console.log(fetchData);
    return (
        <div>
       
  
        <div className="overflow-x-auto">
          <table className="table table-fixed w-full">
            {/* Head */}
            <thead>
              <tr>
                <th className="text-black w-[350px]">Items</th>
                <th className="text-black w-[120px] text-center">Current Bid</th>
                <th className="text-black w-[120px] text-center">Time Left</th>
                <th className="text-black w-[80px] text-left">Bid Now</th>
              </tr>
            </thead>
  
            {/* Body - rows from child */}
            <tbody>
              {fetchData.map((auction) => (
                <Auction key={auction.id} auction={auction} handleHeartButton={handleHeartButton}  heartShape={heartShape}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Auctionss;