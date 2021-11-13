import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://evening-ocean-17101.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])


    return (
        <div>
            <div className='container'>
                <h2 className='text-info fw-bold py-3 my-4' id='offers' ><span className='text-warning fw-bold'> Our </span>Top Products</h2>

                <Row xs={1} md={3} className="g-4">
                    {
                        products.slice(0, 6).map(product => <Product product={product}></Product>)
                    }

                </Row>
            </div>
        </div>
    );
};

export default Products;