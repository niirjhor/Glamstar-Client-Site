import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleonBlur = e => {
        setEmail(e.target.value)
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
            .then(data => console.log(data))

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
                <button className='btn btn-secondary m-3' type="submit">Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;