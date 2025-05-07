import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ContactTable = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const navigate = useNavigate();

    // Fetch all contact entries
    const fetchContacts = async () => {
        try {
            const res = await axios.get('http://localhost:7777/contact/getAllContactDetails');
            setContacts(res.data.body); // assuming response has: { body: [...] }
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleView = (id) => {
        const contact = contacts.find((c) => c._id === id);
        setSelectedContact(contact);
    };

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "This will permanently delete the message!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(`http://localhost:7777/contact/contactDelete/${id}`);
                Swal.fire('Deleted!', 'The contact message has been deleted.', 'success');
                fetchContacts();
            } catch (error) {
                Swal.fire('Error!', 'Could not delete the message.', 'error');
                console.error("Delete error:", error);
            }
        }
    };

    const handleClose = () => setSelectedContact(null);

    return (
        <div className="container mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center bg-white p-3 shadow rounded mb-4">
                <h2 className="fw-bold text-primary mb-0">
                    <i className="bi bi-chat-left-text-fill me-2"></i> Contact Messages
                </h2>
                <button
                    className="btn btn-outline-primary btn-sm d-flex align-items-center"
                    onClick={() => navigate('/adminpanel')}
                    style={{ fontSize: '14px', padding: '5px 10px', width: "20%" }}
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
                            <th>Subject</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((c) => (
                            <tr key={c._id}>
                                <td>{c._id}</td>
                                <td>{c.name}</td>
                                <td>{c.email}</td>
                                <td>{c.subject}</td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-info btn-sm me-2"
                                        onClick={() => handleView(c._id)}
                                    >
                                        <i className="bi bi-eye-fill"></i> View
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleDelete(c._id)}
                                    >
                                        <i className="bi bi-trash-fill"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* View Contact Modal */}
            {selectedContact && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-content" style={{ background: 'white', padding: 20, borderRadius: 8, width: 400, margin: '100px auto' }}>
                        <h4 className="mb-3">📨 Contact Details</h4>
                        <p><strong>ID:</strong> {selectedContact._id}</p>
                        <p><strong>Name:</strong> {selectedContact.name}</p>
                        <p><strong>Email:</strong> {selectedContact.email}</p>
                        <p><strong>Subject:</strong> {selectedContact.subject}</p>
                        <p><strong>Message:</strong> {selectedContact.message}</p>
                        <button className="btn btn-secondary mt-3" onClick={handleClose}>
                            <i className="bi bi-x-circle me-1"></i> Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactTable;
