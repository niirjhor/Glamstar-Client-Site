import React from 'react';
import { Accordion } from 'react-bootstrap';
import './FrequentQues.css'

const FrequentQuestions = () => {
    return (
        <div>
            <h1 class="fw-bold text-center py-5">Frequently Asked<span class="text-danger"> Questions</span></h1>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col-lg-6">
                        <img src="https://media.istockphoto.com/photos/fancy-designer-antique-golden-bracelets-for-woman-fashion-picture-id1277517088?b=1&k=20&m=1277517088&s=170667a&w=0&h=PXTQvh19pESR7mIekh3mJQHWcw2FDRrYcHdxsv9XY-Q=" class="image py-5" alt="" />
                    </div>
                    <div class="col-lg-6">
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> What are the most important things I should
                                    know about Glamstar?</Accordion.Header>
                                <Accordion.Body>
                                    Glamstar is an online juwelry shop which has now served more than 10k customers in Bangladesh. Products are mostly imported from china and some products are imported from Thailand
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Does Glamstar have any physical shop?</Accordion.Header>
                                <Accordion.Body>
                                    No, but we are planning to open a shop soon.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>What are the products of Glamstar?</Accordion.Header>
                                <Accordion.Body>
                                    Mainly fashion juwelry but we do have dress collection also
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Online delivery system available?</Accordion.Header>
                                <Accordion.Body>
                                    Yes, Home delivery is available
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Does Glamstar have any physical shop?</Accordion.Header>
                                <Accordion.Body>
                                    No, but we are planning to open a shop soon.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>How many days to deliver?</Accordion.Header>
                                <Accordion.Body>
                                    After confirmation mostly 2 days
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>

            </div>

        </div >

    );
};

export default FrequentQuestions;