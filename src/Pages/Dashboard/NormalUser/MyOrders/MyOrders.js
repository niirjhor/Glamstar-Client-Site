import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://evening-ocean-17101.herokuapp.com/bookingConfirmations')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    //handle Delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to cancel the booking?")
        if (proceed) {
            const url = `https://evening-ocean-17101.herokuapp.com/bookingConfirmations/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Booking has been cancelled')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
        return {
            handleDelete
        }
    }


    const matchedData = orders.filter(order => order?.email === user?.email)

    const pageContainer = {
        width: "100",
        overflow: "hidden"
    }

    return (

        <div className="m-0 p-0" style={pageContainer}>

            <h1 className="m-5 p-5">MY ORDERS</h1>
            <Table style={{ overflowX: "auto" }} responsive className="mb-5">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Product Name</th>

                        <th>Full Name</th>

                        <th>Email</th>

                        <th>Address</th>
                        <th>Phone Number</th>


                        <th>Price</th>

                        <th>Order Status</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        matchedData.map(order =>
                            <tr>
                                <td>{order?.productName} </td>

                                <td>{order?.name} </td>

                                <td>{order?.email} </td>

                                <td>{order?.Address} </td>
                                <td>{order?.phoneNumber} </td>

                                <td>{order?.price} </td>

                                <td className="fw-bold">{order.status} </td>

                                <button className="btn bg-danger text-white" onClick={() => handleDelete(order._id)}>Cancel</button>
                            </tr>
                        )}
                </tbody>
            </Table>
            <div className="m-5">
                <h4 >
                    Total Orders ={matchedData.length}
                </h4></div>
        </div>

    );
};

export default MyOrders;