import React, { useState, useRef } from 'react';
import './Customer.css';
import useLocalStorage from '../Components/useLocalStorage';

function Customer() {
    const [address, setAddress] = useLocalStorage('address', '');
    const [dateTime, setDateTime] = useState('');
    const [snowDepth, setSnowDepth] = useState('6');

    const formRef = useRef(null);

    const handleClear = () => {
        if (address || dateTime || snowDepth) {
            setAddress('');
            setDateTime('');
            setSnowDepth('');
        } else {
            alert('No fields to enter');
        }
    };

    const handleScrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Snow removal request for ${address} on ${dateTime} for ${snowDepth} inches of snow has been submitted!`);
    };

    return (

        <>
            <header className="logo-header">
                <div className="brand">
                    <div className="shield">
                        <div className="svg-stack">

                            <svg
                                className="snow-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="48"
                                height="48"
                                fill="#00bfff"
                            >
                                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                            </svg>

                            <svg
                                className="base-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="48px"
                                viewBox="0 -960 960 960"
                                width="48px"
                                fill="#ffffff"
                            >
                                <path d="M440-246 337-145q-11 11-27.5 11T282-146q-12-11-12-27.5t12-28.5l158-158v-80h-80L201-281q-11 11-27.5 11T145-282q-11-11-11-27.5t11-27.5l101-103H119q-17 0-28-11.5T80-480q0-17 11.5-28.5T120-520h126L145-622q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l158 158h80v-80L281-758q-11-11-11-27.5t12-28.5q11-11 27.5-11t27.5 11l103 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-100q11-11 27.5-11t28.5 11q11 12 11 28.5T678-758L520-600v80h80l158-158q11-11 27.5-11t28.5 12q11 11 11 27.5T814-622L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l100 103q11 11 11 27.5T814-282q-12 12-28.5 12T758-282L600-440h-80v80l158 159q11 11 11 27.5T677-145q-11 11-27.5 11T622-145L520-246v127q0 17-11.5 28T480-80q-17 0-28.5-11.5T440-120v-126Z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className="brand-name">WinterShield</h1>
                </div>
                <div className="auth-buttons">
                    <button className="login" onClick={() => navigate("login")}>Log In</button>
                    <button className="sign-up-button">Sign Up</button>
                </div>
            </header>
            <div className="customer-hero">
                <div className="customer-header-cont">
                    <h1 className="customer-header">Fast Snow Removal. Anytime.</h1>
                </div>
                <div className="customer-subtext-cont">
                    <p className="customer-subtext">Request snow shoveling in seconds.</p>
                </div>
                <div className="customer-request-btn">
                    <button className="request-now" onClick={handleScrollToForm}>
                        Request Now
                    </button>
                </div>
            </div>

            <div className="customer-requests-cont">
                <div className="customer-requests" ref={formRef}>
                    <form className="requests" onSubmit={handleSubmit}>
                        <div className="input-address">
                            <label htmlFor="address">Address: </label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter your address"
                                className="address-form"
                                required
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>

                        <div className="input-datetime">
                            <label htmlFor="datetime">Date & Time: </label>
                            <input
                                type="datetime-local"
                                id="datetime"
                                className="address-form"
                                required
                                onChange={(e) => setDateTime(e.target.value)}
                                value={dateTime}
                            />
                        </div>

                        <div className="input-snow-depth">
                            <label htmlFor="snow-depth">Snow Depth (inches): </label>
                            <select
                                id="snow-depth"
                                className="address-form"
                                required
                                onChange={(e) => setSnowDepth(e.target.value)}
                                value={snowDepth}
                            >
                                <option value="">Select Depth</option>
                                <option value="2">2 inches</option>
                                <option value="4">4 inches</option>
                                <option value="6">6 inches</option>
                                <option value="8">8 inches</option>
                                <option value="10">10+ inches</option>
                            </select>
                        </div>

                        <button type="submit" className="submit-button">Request Snow Removal</button>
                        <button type="button" className="clear-requests" onClick={handleClear}>Clear Requests</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Customer;
