import React from 'react';

function Footer() {
  return (
    <div className="bg-slate-200  ">
      <div className="flex justify-between sm:py-1 sm:px-1  lg:py-10 lg:px-52 ">
        <div>
          <div className="py-1">
            <p className='font-semibold'>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="py-1">
            <p className='font-semibold'>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="py-1">
            <p className='font-semibold'>OLX</p>
          </div>
          <div className="">
            <ul className="cursor-pointer">
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex font-semibold justify-between px-10 py-4 bg-[#002f34] text-white">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p  className=''>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
