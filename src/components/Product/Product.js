import React from "react";
import { Link, useParams } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  const { title, image, price, id } = product;
  const path = "/products/" + id;
  return (
    <div className="shadow-md rounded-sm border p-2 content-center">
      <img src={image} alt="" className="h-52 w-52 mx-auto" />
      <h4 className="font-bold text-center py-4">{title}</h4>
      <p className="font-bold text-center">${price}</p>
      <div className="flex justify-between mt-4">
        <Link to={path} product={product} className="mb-0 text-green-600 font-bold m-0">
          Product Details
        </Link>
        <button className="text-green-600 font-bold m-0" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
