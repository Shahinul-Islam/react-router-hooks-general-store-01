import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div>
      <h2 className="text-3xl text-center font-bold my-4">General Store</h2>
      <nav className="mx-auto justify-center flex border border-4 rounded-lg p-5 w-3/4">
        <CustomLink to="/home" className="mr-4 font-bold">
          Home
        </CustomLink>
        <CustomLink to="/products" className="mr-4 font-bold">
          Products
        </CustomLink>
        <CustomLink to="/cart" className="mr-4 font-bold">
          Cart
        </CustomLink>
        <CustomLink to="/about" className="mr-4 font-bold">
          About
        </CustomLink>
      </nav>
    </div>
  );
};

export default Header;
