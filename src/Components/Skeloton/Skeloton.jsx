import React from 'react';

const SkeletonLoader = () => {
    const dummyPost = [1,2,3,4,5,6,7,8,9,10]


  return (

    <>
    {dummyPost.map((post,id) => (
         <div key={id} className="card rounded lg:w-2/12 sm:w-3/8 m-8 shadow border-black border animate-pulse">
         <div className="p-2 mx-2 my-2 flex justify-end bg-gray-300 rounded-3xl absolute z-100"></div>
         <div className="image h-32 bg-gray-300 rounded-lg"></div>
         <div className="content p-3 flex flex-col flex-grow space-y-4">
           <div className="rate h-6 bg-gray-300 rounded-md"></div>
           <div className="kilometer h-4 bg-gray-300 rounded-md w-1/3"></div>
           <div className="name flex justify-between h-6 bg-gray-300 rounded-md w-2/3">
             <div className="w-1/2 bg-gray-300 rounded-md"></div>
           </div>
         </div>
       </div>
    ))}

    </>
   
  )
};

export default SkeletonLoader;