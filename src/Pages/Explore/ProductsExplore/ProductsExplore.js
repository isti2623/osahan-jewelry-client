import React, { useEffect, useState } from 'react';
import ProductExpo from '../ProductExpo/ProductExpo';

const ProductsExplore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container my-5'>
            <h2 className='fs-1 fw-bold my-3 text-danger'>Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <ProductExpo
                        key={product._id}
                        product={product}
                    ></ProductExpo>)

                }


            </div>
        </div>
    );
};

export default ProductsExplore;