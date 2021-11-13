import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import axios from 'axios';
import { Modal, Button, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Review.css'
import { useHistory } from 'react-router';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const history = useHistory();
    const redirect_uri = '/home';
    const onSubmit = data => {
        console.log(data);
        axios.post('https://evening-ocean-17101.herokuapp.com/reviews', data)
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


                {user.displayName &&
                    <input readOnly={true}{...register("name", { required: true, maxLength: 50 })} value={user.displayName} />
                }
                <br />
                <label>Please share your opinion</label>
                <textarea {...register("description", { required: true, maxLength: 200 })} placeholder="Description" />
                <br />
                <label>Your Profession</label>
                <input {...register("profession", { required: true, maxLength: 200 })} placeholder="Profession" />


                <br />
                <input type='number' {...register("rating", { min: 1, max: 5 })} placeholder="Rating" />
                {errors.rating && (
                    <p>You rating should be between 1 to 5</p>
                )}
                <br />



                <input className='btn btn-warning' type="submit" />
            </form>


        </div >
    );
};

export default Review;