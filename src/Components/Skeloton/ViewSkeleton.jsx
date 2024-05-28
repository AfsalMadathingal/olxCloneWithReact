import React from "react";

const ViewSkeleton = () => {
  return (
    <>
     <div className="bg-slate-100 lg:ms-56 sm:ms-8 w-full lg:w-4/5 shadow-lg p-10 mt-11 border border-gray-400 rounded mb-10 mx-auto">
  <div className="flex flex-col lg:flex-row gap-10">
    <div className="w-full lg:w-1/2 h-full flex justify-center items-center">
      <div className="animate-pulse bg-gray-300 w-full h-64 rounded"></div>
    </div>
    <div className="flex flex-col gap-10 w-full lg:w-1/2">
      <div className="bg-white shadow-lg py-5 px-5 border border-gray-200">
        <div className="animate-pulse bg-gray-300 h-8 w-48 mb-4 rounded"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-64 mb-2 rounded"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-32 mb-2 rounded"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-24 rounded"></div>
      </div>
      <div className="bg-white py-2 px-5 shadow-lg border border-gray-200">
        <div className="animate-pulse bg-gray-300 h-8 w-64 mb-4 rounded"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-48 mb-2 rounded"></div>
        <div className="animate-pulse bg-gray-300 h-4 w-32 mb-2 rounded"></div>
        <div className="animate-pulse bg-gray-300 h-10 w-32 mt-2 rounded"></div>
      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default ViewSkeleton;
