import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-12 carousal col-sm-1'>
                    <img
                        className="d-block carousal w-100"
                        src="https://scontent.fdac27-1.fna.fbcdn.net/v/t39.30808-6/244005915_4499847343414592_3466865292039985724_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=iL03IvedIqIAX8vPb7t&_nc_ht=scontent.fdac27-1.fna&oh=90c1d3af9e71cf5b30787d76c7cd1223&oe=619565D3"
                        alt="First slide"
                    />
                </div>
                <div className='row'>
                    <div className='col-lg-5 col-sm-1 banner-img banner-text bg-light'>
                        <div className="pt-5">
                            <h1><span className="text-danger">Welcome</span><br />
                                to <span className="Skip_color fw-bold"> Glamstar</span></h1>
                            <br />
                            <br />
                            <h2>A <span className="Skip_color"> Online Juwelry </span>  shop for  women around the World!</h2><br />

                        </div>
                        <h2 className='text-success'>Best Quality Service</h2>
                        <a href="#offers"><button href='#offer' className='btn btn-primary Button'>See the Best Offer</button></a>
                    </div>
                    <div className='col-lg-7 col-sm-1 mt-1'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner"
                                    src="https://ae01.alicdn.com/kf/HTB1DM0GOHvpK1RjSZFqq6AXUVXac.jpg"
                                    alt="First slide"
                                />
                                {/* <Carousel.Caption>
                                <h3 className='text-warning'>Minimum Cost</h3>
                            </Carousel.Caption> */}
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner"
                                    src="https://ae01.alicdn.com/kf/H74da54986d814115bca6bff48fb08f70d.jpg"
                                    alt="Second slide"
                                />


                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 banner"
                                    src="https://ae01.alicdn.com/kf/HTB12jJtPhjaK1RjSZFAq6zdLFXaC.jpg?width=800&height=800&hash=1600"
                                    alt="Third slide"
                                />
                                {/* 
                            <Carousel.Caption>
                                <h3 className='text-warning'>Safest Umrah Package</h3>
                            </Carousel.Caption> */}
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;