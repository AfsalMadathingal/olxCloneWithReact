import React from 'react';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner relative w-full">
          <div className="w-full max-w-[1200px] mx-auto">
            <img
              src="../../../Images/banner copy.png"
              alt=""
              className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 object-cover'
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
