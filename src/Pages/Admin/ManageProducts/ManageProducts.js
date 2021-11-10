import React, { useEffect, useState } from 'react';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('https://infinite-beyond-84815.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])

    //DELETE AN Products
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://infinite-beyond-84815.herokuapp.com/products/${id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');

                        const remainingProducts = order.filter(order => order._id !== id);

                        setOrder(remainingProducts);
                    }
                })
        }

    }
    return (
        <div>
            {
                products.map(product =>
                    <div>
                        <h1>{product.name}</h1>
                        <p>{product.desc}</p>
                        <button onClick={() => handleDeleteUser(product._id)} className="btn btn-danger m-2">Cancel</button>
                    </div>

                )
            }
        </div>
    );
};

export default ManageProducts;