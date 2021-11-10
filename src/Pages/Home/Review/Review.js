import React, { useEffect, useState } from 'react';
import SingleRev from '../SingleRev/SingleRev';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://infinite-beyond-84815.herokuapp.com/addReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <h2 className='my-5 text-danger'>Review</h2>
            <div className="row">
                {
                    reviews.map(review => <SingleRev
                        key={review._id}
                        review={review}
                    >
                    </SingleRev>)
                }
            </div>
        </div>
    );
};

export default Review;