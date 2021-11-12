import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import { Modal, Button, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Review.css'
import { useHistory } from 'react-router';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory();
    const redirect_uri = '/home';
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review given successfully');
                    history.push(redirect_uri);
                    reset();
                }
            })
    }
    return (
        <div className='Add-Booking'>

            <h2 className='fw-bold text-warning'>Reviews</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Share Your Name" />
                <br />
                <textarea {...register("description", { required: true, maxLength: 200 })} placeholder="Description" />


                <br />
                <input type='number' {...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating" />

                <br />



                <input className='btn btn-warning' type="submit" />
            </form>


        </div >
    );
};

export default Review;