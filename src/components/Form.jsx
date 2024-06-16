import React, { useState } from 'react';
import Navbar from './Navbar';
import "./Form.css";

const Form = () => {

    // FormData
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        phone: '',
        dob: '',
        address: '',
        gender: '',
        country: '',
        terms: false,
    });

    // Error Object
    const [errors, setErrors] = useState({});

    // Validation Function 
    const validate = () => {
        const newErrors = {};
        if (!formData.username) {
            newErrors.username = 'Username is required';
        } else if (formData.username.length < 3 || formData.username.length > 15) {
            newErrors.username = 'Username must be between 3 and 15 characters';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9])/.test(formData.password)) {
            newErrors.password = 'Password must contain upper and lower case letters, numbers, and special characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.fullName) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.phone) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10,15}$/.test(formData.phone)) {
            newErrors.phone = 'Phone number is invalid';
        }

        if (!formData.dob) {
            newErrors.dob = 'Date of Birth is required';
        }

        if (!formData.address) {
            newErrors.address = 'Address is required';
        }

        if (!formData.gender) {
            newErrors.gender = 'Gender is required';
        }

        if (!formData.country) {
            newErrors.country = 'Country is required';
        }

        if (!formData.terms) {
            newErrors.terms = 'You must agree to the terms and conditions';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            console.log('Form data submitted', formData);
        }
    };

    return (
        <div className="form">
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div className="fields">
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
                        {errors.username && <span>{errors.username}</span>}
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                        {errors.email && <span>{errors.email}</span>}
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                        {errors.password && <span>{errors.password}</span>}
                    </div>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                        {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                    </div>
                    <div className="field">
                        <label>Full Name</label>
                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                        {errors.fullName && <span>{errors.fullName}</span>}
                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} />
                        {errors.phone && <span>{errors.phone}</span>}
                    </div>
                    <div className="field">
                        <label>Date of Birth</label>
                        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                        {errors.dob && <span>{errors.dob}</span>}
                    </div>
                    <div className="field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
                        {errors.address && <span>{errors.address}</span>}
                    </div>
                    <div className="field">
                        <label>Gender</label>
                        <select name="gender" value={formData.gender} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.gender && <span>{errors.gender}</span>}
                    </div>
                    <div className="field">
                        <label>Country</label>
                        <select name="country" value={formData.country} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                        </select>
                        {errors.country && <span>{errors.country}</span>}
                    </div>
                    <div className="field">
                        <label>
                            <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                            I agree to the terms and conditions
                        </label>
                        {errors.terms && <span>{errors.terms}</span>}
                    </div>
                </div>
                <button className='buttons' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Form;
