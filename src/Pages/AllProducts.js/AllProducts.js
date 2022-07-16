import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Products from "../Products/Products";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div className="container">
        <h2 className="mt-5 mb-3">All Products {products.length}</h2>
        {products.length <= 0 && (
          <div
            style={{ height: "150px" }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <Spinner animation="border" variant="success" />
          </div>
        )}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-3 gy-5 pb-5">
          {products.map((product) => (
            <Products key={product.id} product={product}></Products>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
