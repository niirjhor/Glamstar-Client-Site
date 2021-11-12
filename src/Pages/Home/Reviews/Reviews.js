import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowReview from './ShowReview/ShowReview';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>

            <h1 class="fw-bold text-center py-5">Happy <span class="text-danger">Clients Says</span></h1>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews.map(review => <ShowReview review={review}></ShowReview>)


                }
            </Row>
        </div>

    );
};

export default Reviews;