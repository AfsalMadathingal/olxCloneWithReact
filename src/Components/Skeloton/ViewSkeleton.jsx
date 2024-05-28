import React from "react";

const ViewSkeleton = () => {
  return (
    <>
      <div className="lg:flex lg:justify-center bg-slate-100 ms-56 w-4/5 shadow-lg p-10 mt-11 gap-10 border border-gray-400 rounded mb-10 animate-pulse">
        <div className="w-1/2">
          <div className="bg-gray-300 h-96 rounded"></div>
        </div>
        <div className="">
          <div className="bg-white shadow-lg mb-10 w-96 py-5 px-5 border border-gray-200">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="bg-white py-2 px-5 shadow-lg border border-gray-200">
            <div className="h-8 bg-gray-300 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-6 bg-gray-300 rounded mb-4"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewSkeleton;
