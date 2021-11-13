import React from 'react';
import { Col, Container, ModalFooter, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-dark'>
            <ModalFooter className="font-small text-dark justify-content-center mt-5">
                <Container fluid className="bg-dark">
                    <Row>
                        <Col>
                            <h5 className="title text-white">About Us</h5>
                            <li className="list-unstyled lists">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Our History</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Leadership Team</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Product Info</a>
                            </li>

                        </Col>
                        <Col md="3">
                            <h5 className="title text-white">Careers</h5>
                            <li className="list-unstyled">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Job Opportunities</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Employee Opportunities</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Working with us</a>
                            </li>

                        </Col>
                        <Col md="3">
                            <h5 className="title text-white">Contact Us</h5>
                            <li className="list-unstyled">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Donations</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Employment</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Frequent Questions</a>
                            </li>

                        </Col>
                        <Col>
                            <h5 className="title text-white">Extra</h5>
                            <li className="list-unstyled">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Trending Now</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Mobile Registration</a>
                            </li>
                            <li className="list-unstyled pt-3">
                                <a target='_blank' rel="noreferrer" href="https://freefrontend.com/css-headers-footers/">Be a Leader</a>
                            </li>

                        </Col>
                    </Row>
                    <p className='text-footer text-center text-white justify-content-center mx-auto py-4'>© Copyright Glamstar 2021 | All Rights Reserved | Privacy Policy</p>
                </Container>

            </ModalFooter>
        </div>
    );
};

export default Footer;