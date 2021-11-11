import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import useAuth from '../../hooks/useAuth';
import useFirbase from '../../hooks/useFirebase';


const Login = () => {
    const auth = getAuth();
    const [username, setUserName] = useState('');
    const { setIsLoading, user, setUser } = useAuth();
 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';
    console.log('came from', location.state?.from);

    const toggleLogin = e => {

        setIsLogin((e.target.checked));
    }
    const handleNameChange = e => {
        setUserName(e.target.value)
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    const handleRegistration = e => {
        e.preventDefault();

        console.log(email, password);
        if (password.length <= 5) {
            setError('Password must be atleast 6 characters')
            return;
        }


        if (isLogin) {
            processLogin(email, password);
        }
        else {
            createNewUser(email, password);

        }
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                history.push(redirect_url);

                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const createNewUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                const newUser = { email, displayName: name };
                setUser(newUser)
                setError('');
                verifyEmail();
                saveUser(email, name)
                setName();

                history.push(redirect_url)
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const setName = () => {
        updateProfile(auth.currentUser, { displayName: username })
            .then(result => {
                window.location.reload();
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {


            })
            .catch(error => {
                setError(error.message);
            })
    }
 
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return (
        <div className="container">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                {!isLogin && <div className="row mb-3">
                    <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control w-75" id="inputName" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control w-75" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onBlur={handlePasswordChange} className="form-control w-75" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3 w-50">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <div className='justify-content align-items-start'>
                                <span className='text-danger fw-bold'> Already Registered?</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>
                <button type="submit" className="btn btn-primary">
                    {isLogin ? 'Login' : 'Register'}
                </button>
            </form>
            <div>


            </div>

        </div>

    );
};

export default Login;