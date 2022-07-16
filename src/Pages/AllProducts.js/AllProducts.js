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
        <div  style={{backgroundColor: '#F5F5F5'}}>
            <div className='container'>
            <h2 className='pt-5 mb-3'>All Products {products.length}</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-3 gy-5 pb-5'>
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
        </div>
    );
};

export default AllProducts;