import React from 'react';

const SingleRev = (props) => {
    const { name, email, desc } = props.review;
    return (

        <div className="col-lg-4">
            <h3 className='text-warning fs-3'>Name</h3>
            <h6 className='fs-5'>{email}</h6>
            <p className='text-secondary'>{desc}</p>
        </div>

    );
};

export default SingleRev;