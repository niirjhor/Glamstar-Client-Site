import React, { useEffect, useState } from 'react';
import { Col, Row, Table } from 'react-bootstrap';

const ManageProducts = () => {


    //GET User Data
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://evening-ocean-17101.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    //handle Delete
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to delete the user?")
        if (proceed) {
            const url = `https://evening-ocean-17101.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE"
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Products is deleted successfully')
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
        return {
            handleDelete
        }
    }

    const pageContainer = {
        width: "100",
        overflow: "hidden"

    }
    return (


        <div className="container" style={pageContainer}>
            <Table style={{ overflowX: "auto" }} responsive="sm" className="mb-5 container" >
                <thead>
                    <tr>
                        <th>Ser</th>
                        <th>Product Name</th>


                        <th>Price</th>

                        <th>Delete Product</th>
                    </tr>
                </thead>
                {orders?.map((order, index) => (
                    <tbody>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{order?.productName}</td>

                            <td className='text-wrap style="width: 6rem;"'>{order?.price}</td>

                            <td>
                                <button onClick={() => handleDelete(order._id)} className="btn bg-warning p-2">Delete</button>
                            </td>


                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>



    );
};

export default ManageProducts;