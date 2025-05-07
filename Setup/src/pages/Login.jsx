import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:7777/user/logIn", data);

            if (response.data.status === 400) {
                toast.error(response.data.message);
            } else {
                // Save token only
                sessionStorage.setItem("token", JSON.stringify(response.data.body));
                toast.success("Login successful!");
                navigate("/");
            }

        } catch (error) {
            console.error("Login error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn bg-dark" data-wow-delay="0.1s">
                <div className="container text-center py-5">
                    <h1 className="display-2 text-white mb-4 animated slideInDown">Login Now</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                            <li className="breadcrumb-item text-primary" aria-current="page">Login Now</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-xxl py-5 bg-dark text-white">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <h3 className="mb-4">Welcome Back!</h3>
                            <p className="mb-4">Login to access your dashboard, manage your profile, and explore features.</p>
                            <form onSubmit={handleSubmit} className="bg-secondary p-4 rounded shadow-lg">
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                <p className="mt-3 text-center">
                                    Don't have an account? <Link to="/signup" className="text-info">Sign Up</Link>
                                </p>
                            </form>
                        </div>

                        <div className="col-lg-6">
                            <h3 className="mb-4">Contact Details</h3>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-map-marker-alt text-white"></i>
                                </div>
                                <div>
                                    <h6>Our Office</h6>
                                    <span>123 Street, New York, USA</span>
                                </div>
                            </div>
                            <div className="d-flex border-bottom pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div>
                                    <h6>Call Us</h6>
                                    <span>+012 345 67890</span>
                                </div>
                            </div>
                            <div className="d-flex pb-3 mb-3">
                                <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                                    <i className="fa fa-envelope text-white"></i>
                                </div>
                                <div>
                                    <h6>Mail Us</h6>
                                    <span>info@example.com</span>
                                </div>
                            </div>

                            <iframe className="w-100 rounded"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                                frameBorder="0" style={{ minHeight: "300px", border: "0" }}
                                allowFullScreen="" aria-hidden="false"
                                tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
