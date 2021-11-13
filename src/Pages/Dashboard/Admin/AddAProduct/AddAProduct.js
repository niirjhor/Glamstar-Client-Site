import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";
import './AddProducts.css'
import { useHistory } from 'react-router';
const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();
    const redirect_uri = '/explore'

    const onSubmit = data => {
        console.log(data);
        axios.post('https://evening-ocean-17101.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Packages added successfully');
                    history.push(redirect_uri);
                    reset();
                }
            })
    }
    return (
        <div className='Add-Booking'>

            <h2 className='fw-bold text-warning'>Add a New Tour Package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <input {...register("productName", { required: true, maxLength: 30 })} placeholder="Product Name" />


                <br />
                <input type='number' {...register("price", { required: true, maxLength: 20 })} placeholder="Product Price" />

                <br />


                <textarea {...register("description", { required: true, maxLength: 100 })} placeholder="Description" />
                <br />


                <input {...register("image")} placeholder='Image url' />
                <br />

                <input className='btn btn-warning' type="submit" />
            </form>


        </div >
    );
};

export default AddAProduct;