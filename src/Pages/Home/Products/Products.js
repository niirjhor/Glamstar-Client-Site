import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div>
            <div className='container'>
                <h2 className='text-info fw-bold py-3 my-4' id='offers' ><span className='text-warning fw-bold'> Our </span>Top Products</h2>

                <Row xs={1} md={3} className="g-4">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default Products;