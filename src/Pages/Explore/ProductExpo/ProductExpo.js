import React from 'react';
import { Link } from 'react-router-dom';

const ProductExpo = (props) => {
    const { name, img, desc, price } = props.product;
    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text">Price: {price}</p>
                    </div>
                    <div className="card-footer">
                        <Link to='/purchase'><div className="btn btn-danger fw-bold">BUY NOW</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductExpo;