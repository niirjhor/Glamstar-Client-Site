import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    if (!admin || isLoading) {
        return <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? children : <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                ></Redirect>

            }
        >

        </Route>
    );
};

export default AdminRoute;