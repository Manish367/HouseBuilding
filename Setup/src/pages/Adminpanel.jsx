import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [messageCount, setMessageCount] = useState(0); // 👈 NEW

    const tokennn = (sessionStorage.getItem("token"));
    const parsedToken = tokennn ? JSON.parse(tokennn) : null;

    console.log(parsedToken, "er")

    const fetchUserCount = async () => {
        try {
            const res = await axios.get("http://localhost:7777/user/find", {
                headers: {
                    Authorization: `Bearer ${parsedToken?.token}`
                }
            });

            if (res.data && Array.isArray(res.data.body)) {
                setUserCount(res.data.body.length);
            }
        } catch (error) {
            console.error("Failed to fetch user count:", error);
        }
    };

    const fetchMessageCount = async () => {
        try {
            const res = await axios.get("http://localhost:7777/contact/getAllContactDetails");
            if (res.data && Array.isArray(res.data.body)) {
                setMessageCount(res.data.body.length); // assuming "data" holds array of messages
            }
        } catch (error) {
            console.error("Failed to fetch message count:", error);
        }
    };

    useEffect(() => {
        fetchUserCount();
        fetchMessageCount(); // 👈 also call this
    }, []);

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="bg-dark text-white p-3 vh-100 shadow-sm" style={{ width: '250px' }}>
                <h4 className="mb-4 border-bottom pb-2">Admin Panel</h4>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link to="/table" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-table me-2"></i> User Table
                        </Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link to="/ContactTable" className="nav-link text-white d-flex align-items-center">
                            <i className="bi bi-envelope-paper me-2"></i> Contact Us Details
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main content */}
            <div className="flex-grow-1 p-5 bg-light min-vh-100">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h2 className="fw-bold">Welcome, Admin 👋</h2>
                        <p className="text-muted">Use the sidebar to navigate.</p>
                    </div>
                    <div>
                        <Link to="/" className="btn btn-outline-secondary">
                            <i className="bi bi-box-arrow-left me-1"></i> Logout
                        </Link>
                    </div>
                </div>

                {/* Dashboard Stats */}
                <div className="row g-4">
                    <Link to={"/table"}>
                        <div className="col-md-4">
                            <div className="card text-white bg-primary shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text fs-4">{userCount}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/ContactTable"}>     <div className="col-md-4">
                        <div className="card text-white bg-success shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Messages</h5>
                                <p className="card-text fs-4">{messageCount}</p>
                            </div>
                        </div>
                    </div></Link>

                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
