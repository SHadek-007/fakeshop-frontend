import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const { id, image, title, price } = product;
  const navigate = useNavigate();

  return (
    <div>
      <div className="col">
        <div className="card h-100 bg-white border-0">
          <img
            src={image}
            className="card-img-top w-75 mx-auto p-3"
            style={{ height: "150px" }}
            alt="..."
          />
          <div className="card-body">
            <h6 className="card-title">{title.slice(0, 20)}</h6>
            <p>Price: <span className='text-warning fw-bold'>${price}</span></p>
            <button onClick={() => navigate(`/${id}`)} className="btn btn-success w-100">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
