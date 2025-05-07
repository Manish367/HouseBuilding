import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7777/user/signup", data);
            if (response.data.status === 200) {
                toast.success(response.data.message);
                navigate("/login");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Signup failed. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="signup-container" style={{ margin: "auto", width: "20%", marginTop: "1%" }}>
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                </div>

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
