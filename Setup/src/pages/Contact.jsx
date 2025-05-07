import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Contact() {
    const [userdata, setUserdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Handle input changes
    const onhandle = (e) => {
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value
        });
    };

    // Send form data to backend
    const contactData = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = userdata;

        // Validate required fields
        if (!name || !email || !message) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Fields',
                text: 'Please fill in Name, Email, and Message.',
                confirmButtonColor: '#3085d6'
            });
            return;
        }

        axios.post("http://localhost:7777/contact/contactCreate", {
            name,
            email,
            subject,
            message
        })
            .then((res) => {
                console.log("Server response:", res.data);

                if (res.data.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Message Sent!',
                        text: 'Your request has been submitted. We will contact you shortly.',
                        confirmButtonColor: '#28a745'
                    });
                    setUserdata({ name: "", email: "", subject: "", message: "" });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Failed!',
                        text: res.data.message || 'Message could not be sent.',
                        confirmButtonColor: '#d33'
                    });
                }
            })
            .catch((err) => {
                console.error("Error sending contact form:", err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong. Please try again later.',
                    confirmButtonColor: '#d33'
                });
            });
    };

    return (
        <>
            {/* Page Header */}
            <div className="container-fluid bg-dark bg-img p-5 mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 className="display-4 text-uppercase text-white">Contact Us</h1>
                        <a href="/">Home</a>
                        <i className="far fa-square text-primary px-2"></i>
                        <a href="/contact">Contact</a>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="container-fluid contact position-relative px-5" style={{ marginTop: "90px" }}>
                <div className="container">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <i className="bi bi-geo-alt fs-1 text-white"></i>
                                <h6 className="text-uppercase my-2">Our Office</h6>
                                <span>123 Street, New York, USA</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <i className="bi bi-envelope-open fs-1 text-white"></i>
                                <h6 className="text-uppercase my-2">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-primary border-inner text-center text-white p-5">
                                <i className="bi bi-phone-vibrate fs-1 text-white"></i>
                                <h6 className="text-uppercase my-2">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <form method='post'>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Your Name"
                                            style={{ height: "55px" }}
                                            name='name'
                                            value={userdata.name}
                                            onChange={onhandle}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                            type="email"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Your Email"
                                            style={{ height: "55px" }}
                                            name='email'
                                            value={userdata.email}
                                            onChange={onhandle}
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <input
                                            type="text"
                                            className="form-control bg-light border-0 px-4"
                                            placeholder="Subject"
                                            style={{ height: "55px" }}
                                            name='subject'
                                            value={userdata.subject}
                                            onChange={onhandle}
                                        />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea
                                            className="form-control bg-light border-0 px-4 py-3"
                                            rows="4"
                                            placeholder="Message"
                                            name='message'
                                            value={userdata.message}
                                            onChange={onhandle}
                                        ></textarea>
                                    </div>
                                    <div className="col-sm-12">
                                        <button
                                            className="btn btn-primary border-inner w-100 py-3"
                                            type="submit"
                                            onClick={contactData}
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
