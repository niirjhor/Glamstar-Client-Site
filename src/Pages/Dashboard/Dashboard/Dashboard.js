import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Pay from '../NormalUser/Pay/Pay';
import MyOrders from '../NormalUser/MyOrders/MyOrders';


import AddAProduct from '../Admin/AddAProduct/AddAProduct';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import Review from '../NormalUser/Review/Review';


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth();



    return (
        <div>

            <div class="container-fluid display-table home">
                <div class="row display-table-row">
                    <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div class="logo">

                        </div>
                        <div class="navi p-3 g-5">

                            <ul>
                                {admin &&

                                    <li>
                                        <Link to={`${url}/makeAdmin`}><button className='btn btn-warning'>Make Admin</button></Link>
                                    </li>
                                }
                                {!admin &&
                                    <li>
                                        <Link to={`${url}/pay`}><button className='btn btn-warning'>Pay</button></Link>
                                    </li>
                                }
                                {!admin &&
                                    <li>
                                        <Link to={`${url}/myorders`}><button className='btn btn-warning'>My Orders</button></Link>
                                    </li>
                                }
                                {!admin &&
                                    <li>
                                        <Link to={`${url}/review`}><button className='btn btn-warning'>Review</button></Link>
                                    </li>
                                }

                                {admin &&
                                    <li>
                                        <Link to={`${url}/manageallorders`}><button className='btn btn-warning'>Manage All Orders</button></Link>
                                    </li>
                                }
                                {admin &&
                                    <li>
                                        <Link to={`${url}/addproduct`}><button className='btn btn-warning'>Add A Product</button></Link>
                                    </li>
                                }
                                {admin &&
                                    <li>
                                        <Link to={`${url}/manageproducts`}><button className='btn btn-warning'>Manage Products</button></Link>
                                    </li>
                                }
                                {user?.email &&
                                    <li>
                                        <Link to={`${url}/logout`}><button className='btn btn-warning' onClick={logOut}>Logout</button></Link>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <Switch>
                            <Route exact path={`${path}/`}>
                                <DashboardHome></DashboardHome>
                            </Route>

                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>

                            <AdminRoute exact path={`${path}/manageallorders`}>
                                <ManageAllOrders></ManageAllOrders>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/addproduct`}>
                                <AddAProduct></AddAProduct>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageproducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>

                        </Switch>
                    </div>
                </div>
            </div>


        </div>



    );
};

export default Dashboard;