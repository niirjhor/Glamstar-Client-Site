import React from 'react';

const ShowReview = (props) => {
    console.log(props.review);
    const { _id, name, rating, description } = props.review;
    return (
        <div class="col">
            <div class="card h-100">
                <img width="150px" height="146px" src="images/user-1.png"
                    class="card-img-top w-50 my-5 mx-auto p-3" alt="..." />
                <div class="card-body text-center">
                

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