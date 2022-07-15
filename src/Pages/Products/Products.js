import React from "react";

const Products = ({ product }) => {
  const { id, image, title } = product;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img
            src={image}
            className="card-img-top w-75 mx-auto p-3"
            style={{ height: "150px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0, 20)}</h5>
            <button className="btn btn-primary w-100">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
