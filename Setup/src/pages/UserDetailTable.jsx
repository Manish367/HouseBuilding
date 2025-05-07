import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const navigate = useNavigate();

    // Safely decode token
    let parsedToken = null;
    try {
        const token = sessionStorage.getItem("token");
        parsedToken = token ? JSON.parse(token) : null;
    } catch (err) {
        console.error("Error parsing token:", err);
    }

    const fetchUsers = async () => {
        try {
            const res = await axios.get('http://localhost:7777/user/find', {
                headers: {
                    Authorization: `Bearer ${parsedToken?.token}`
                }
            });


            console.log("API Response:", res.data);

            if (res.data.success === false && res.data.message === "please login again") {
                // Handle expired or invalid token by redirecting to the login page
                Swal.fire({
                    title: 'Session Expired',
                    text: 'Please log in again.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // Clear token from localStorage and redirect to login page
                    localStorage.removeItem("token");
                    navigate('/login');
                });
                return; // Exit the function early
            }

            if (Array.isArray(res.data.body)) {
                setUsers(res.data.body);
            } else {
                console.error("Unexpected data format. Expected array, got:", typeof res.data.body);
                setUsers([]); // fallback
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setUsers([]); // fallback
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleView = (id) => {
        const user = users.find((u) => u._id === id);
        setSelectedUser(user);
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:7777/user/dataDelete/${id}`, {
                    headers: {
                        Authorization: `Bearer ${parsedToken?.token || parsedToken}`
                    }
                });
                Swal.fire('Deleted!', 'User has been deleted.', 'success');
                fetchUsers();
            } catch (error) {
                Swal.fire('Error!', 'Could not delete the user.', 'error');
                console.error("Delete error:", error);
            }
        }
    };

    const handleClose = () => setSelectedUser(null);

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center bg-white p-3 shadow rounded mb-4">
                <h2 className="fw-bold text-primary mb-0">
                    <i className="bi bi-people-fill me-2"></i> User List
                </h2>
                <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => navigate('/adminpanel')}
                    style={{ width: "21%" }}
                >
                    <i className="bi bi-arrow-left me-2"></i> Back to Admin Panel
                </button>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-hover shadow-sm bg-white rounded">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((u) => (
                                <tr key={u._id}>
                                    <td>{u._id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-info btn-sm me-2"
                                            onClick={() => handleView(u._id)}
                                        >
                                            <i className="bi bi-eye-fill"></i> View
                                        </button>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(u._id)}
                                        >
                                            <i className="bi bi-trash-fill"></i> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-muted">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* User Modal */}
            {selectedUser && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-content" style={{ background: 'white', padding: 20, borderRadius: 8, width: 400, margin: '100px auto' }}>
                        <h4 className="mb-3">👤 User Details</h4>
                        <p><strong>ID:</strong> {selectedUser._id}</p>
                        <p><strong>Name:</strong> {selectedUser.name}</p>
                        <p><strong>Email:</strong> {selectedUser.email}</p>
                        <button className="btn btn-secondary mt-3" onClick={handleClose}>
                            <i className="bi bi-x-circle me-1"></i> Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTable;
