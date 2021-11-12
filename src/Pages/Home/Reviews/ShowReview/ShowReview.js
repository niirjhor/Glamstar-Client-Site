import React from 'react';
import Rating from 'react-rating';


const ShowReview = (props) => {
    const { _id, name, rating, description } = props.review;



    return (
        <div class="col">
            <div class="card h-100">
                <img width="150px" height="146px" src="images/user-1.png"
                    class="card-img-top w-50 my-5 mx-auto p-3" alt="..." />
                <div class="card-body text-center">

                    <Rating
                        initialRating={rating}
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                    />
                    <p class="card-text">{description}</p>
                    <div class="pb-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p class="text-primary fw-bold">{name}</p>
                    <p class="fw-bold">Engineer</p>
                </div>

            </div>
        </div>

    );
};

export default ShowReview;