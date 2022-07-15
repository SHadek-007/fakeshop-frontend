import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container'>
            <p>This product {products.length}</p>
            <div className='row row-cols-1 row-cols-md-4 gx-3 gy-5'>
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default AllProducts;