import React from 'react';
import Rating from 'react-rating';
import useAuth from '../../../../hooks/useAuth';




const ShowReview = (props) => {
    const { _id, name, rating, description, profession } = props.review;
    const { user } = useAuth();


    return (
        <div class="container">
            <div class="card h-100">

                <div class="card-body text-center">

                    <Rating
                        initialRating={rating}
                        emptySymbol="fa fa-star-o fa-2x"
                        fullSymbol="fa fa-star fa-2x"
                        readonly
                    />
                    <p class="card-text">Review:{description}</p>
                    {/* <div class="pb-2">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div> */}
                    <p class="fw-bold">Reviewer Name: <span class="text-primary fw-bold">{name}</span> </p>
                    <p >Reviewer Profession: <span class="text-primary fw-bold">{profession}</span></p>
                </div>

            </div>
        </div>

    );
};

export default ShowReview;