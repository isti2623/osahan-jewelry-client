import React from 'react';
import Rating from 'react-rating';


const SingleRev = (props) => {
    const { name, email, desc, rating } = props.review;
    return (

        <div className="col-lg-4">
            <h3 className='text-warning fs-3'>Name</h3>
            <h6 className='fs-5'>{email}</h6>
            <p className='text-secondary'>{desc}</p>
            <Rating
                className='text-warning'
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={rating}
                readonly>

            </Rating>
        </div>

    );
};

export default SingleRev;