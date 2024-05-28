import React, { useContext, useEffect, useState } from "react";
import Heart from "../../assets/Heart";
import "./Post.css";
import { useFirebase } from "../../store/FirebaseContext";
import SkeletonLoader from "../Skeloton/Skeloton";

import { useNavigate } from "react-router-dom";
import { PostContext } from "../../store/PostContext";

function Posts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const {setPostDetails} = useContext(PostContext)
  const navigate = useNavigate()

  const { getProducts } = useFirebase();

  useEffect(() => {
    getProducts()
      .then((result) => {
        setProducts(result);
        setLoading(false);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleView = (product)=>{
    navigate(`/view/${product.id}`)
  }

  return (
    <div className="postParentDiv bg-slate-100 ">
      <p className="py-2 font-semibold mx-8">Recommendations</p>
      <div className="recommendations flex flex-wrap justify-center">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          products.map((product) => (
            <div
              onClick={()=>{handleView(product)}}
              key={product.id}
              className="cursor-pointer bg-white rounded lg:w-2/12  sm:w-3/8 m-8  shadow border-black border hover:shadow-xl h-d flex flex-col"
            >
              <div className=" p-2 mx-2 my-2 flex justify-end bg-white rounded-3xl absolute z-100">
                <Heart />
              </div>
              <div className=" h-28 py-2 px-2">
                <img
                  src={product.downloadURL}
                  alt=""
                  
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div>
              <div className="content p-3 flex flex-col flex-grow">
                <p className="rate text-xl font-semibold">
                  &#x20B9; {product.price}
                </p>
                <span className="kilometer text-base text-gray-500">
                  {product.category}
                </span>
                <p className="name flex justify-between mt-4 text-lg font-medium">
                  {product.name}{" "}
                  <span>
                    {new Date(product.createdAt).toLocaleDateString()}
                  </span>{" "}
                </p>
              </div>
              <div className="date p-6 text-right text-base text-gray-400"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Posts;
