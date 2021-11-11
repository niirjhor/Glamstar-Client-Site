import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory, useLocation, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Purchase.css'

const Purchase = () => {
    const { purchaseId } = useParams();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/dashboard/myorders';


    const { user } = useAuth();
    console.log(user);
    const [bookings, setBookings] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${purchaseId}`)
            .then(res => res.json())
            .then(data => setBookings(data))
        // 

    }, [])
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/bookingConfirmations', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking Successfully Done');
                    reset();
                    history.push(redirect_url)
                }
            })

    }
    return (
        <div className='Add-Booking'>

            <h2 className='fw-bold text-warning'>Confirm Your Booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {user.displayName &&
                    <input readOnly={true}{...register("name", { required: true, maxLength: 50 })} value={user.displayName} />
                }
                <br />
                <h3 className="text-start">Email</h3>
                <input {...register("email", { required: true, maxLength: 50 })} placeholder="Email" value={user.email} />

                <br />
                <h3 className="text-start">Shipping Status</h3>
                <input className="pending" {...register("status", { required: true, maxLength: 50 })} placeholder="Status" value="Pending" />

                {bookings.price && <input readOnly={true} {...register("price")} defaultValue={bookings.price} />}
                <br />
                {bookings.productName &&
                    <input readOnly={true} {...register("productName", { required: true })} value={bookings.productName} />}

                <br />
                <input type='text' {...register("Address", { required: true, maxLength: 50 })} placeholder="Full Address" />
                <br />
                <input type='number' {...register("phoneNumber", { required: true, maxLength: 13 })} placeholder="Phone Number" />
                <br />
                <input className='btn btn-warning' type="submit" />
            </form>


        </div >
    );
};

export default Purchase;