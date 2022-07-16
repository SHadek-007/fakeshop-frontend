import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    useEffect(()=>{
        const url = `https://fakestoreapi.com/products/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    return (
        <div className='container'>
      <div className="col">
        <div className="card mx-auto h-100 border-success my-5 details-card">
          <img
            src={product.image}
            className="card-img-top w-50 mx-auto p-3"
            alt="..."
          />
          <div className="card-body">
            <small className='text-secondary'>Category: <span className='fw-bold'>{product.category}</span></small>
            <h4 className="card-title">{product.title}</h4>
            <p><span className='fw-semibold'>Price:</span> <span className='text-warning fw-bold'>${product.price}</span></p>
            <p><span className='fw-semibold'>Description:</span> <span className='text-secondary'>{product.description}</span></p>
            <p>Rating: <span className='text-warning fw-bold'>{product?.rating?.rate}</span> ({product?.rating?.count})</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductDetails;