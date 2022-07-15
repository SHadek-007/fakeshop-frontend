import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [products, setProducts] = useState({});
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
    },[])
    return (
        <div className='container'>
            
        </div>
    );
};

export default AllProducts;