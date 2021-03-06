import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Products.css'



const Product = (props) => {
    const { _id, productName, price, image, description } = props.product;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-sm"> <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="clearfix mb-3"> <span className="float-start badge rounded-pill bg-primary">{productName.slice(0, 40)}</span> <span className="float-end text-danger fw-bold price-hp">{price} Tk</span> </div>
                        <h5 className="card-title">{description}</h5>

                        <div className="text-center my-4">
                            <Link to={`/purchase/${_id}`}><button className="btn btn-warning">Purchase Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        // <div class="wrapper">
        //     <div class="card text-center">
        //         <div class="image"> <img src={image} width="300" /> </div>
        //         <div class="about-product text-center">
        //             <h3>COX Headphone</h3>
        //             <h4>$99.<small>99</small></h4> <button class="btn btn-success buy-now">Buy Now</button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Product;