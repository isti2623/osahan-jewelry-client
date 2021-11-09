import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./Products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='container my-5'>
            <h2 className='fs-1 fw-bold my-3 text-danger'>Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)

                }


            </div>
        </div>
    );
};

export default Products;