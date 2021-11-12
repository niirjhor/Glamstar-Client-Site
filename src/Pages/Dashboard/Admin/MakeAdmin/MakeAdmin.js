import React, { useState } from 'react';
import { Alert, FloatingLabel, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleonBlur = e => {
        setEmail(e.target.value);

    }
    const handleAdmin = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()


    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdmin}>
                <>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        onBlur={handleonBlur}
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </>
                <button className='btn btn-info m-3' type="submit">Make Admin</button>
            </form>
            {success && <Alert severity="success">Made Admin successful!</Alert>}
        </div>
    );
};

export default MakeAdmin;