import React, { useState, useRef } from 'react';
import './Customer.css';
import useLocalStorage from '../Components/useLocalStorage';

function Customer() {
    const [address, setAddress] = useLocalStorage('address', '');
    const [dateTime, setDateTime] = useState('');
    const [snowDepth, setSnowDepth] = useState('6');

    // This is a reference to the form section. Think of it like naming the form so we can scroll to it.
    const formRef = useRef(null);

    // When user clicks "Request Now", scroll to the form
    const handleScrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Snow removal request for ${address} on ${dateTime} for ${snowDepth} inches of snow has been submitted!`);
    };

    return (
        <>
            <div className="customer-hero">
                <div className="customer-header-cont">
                    <h1 className="customer-header">Fast Snow Removal. Anytime.</h1>
                </div>
                <div className="customer-subtext-cont">
                    <p className="customer-subtext">Request snow shoveling in seconds.</p>
                </div>
                <div className="customer-request-btn">  <button className="request-now" onClick={handleScrollToForm}>
                    Request Now
                </button>
                </div>

            </div>

            {/* This is the request form section */}
            <div className="customer-requests-cont"> <div className="customer-requests" ref={formRef}>
                <form className="requests" onSubmit={handleSubmit}>
                    <div className="input-address">
                        <label htmlFor="address">Address: </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter your address"
                            className="address-form"
                            required
                            onChange={(event) => setAddress(event.target.value)}
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
                            onChange={(event) => setDateTime(event.target.value)}
                            value={dateTime}
                        />
                    </div>

                    <div className="input-snow-depth">
                        <label htmlFor="snow-depth">Snow Depth (inches): </label>
                        <select
                            id="snow-depth"
                            className="address-form"
                            required
                            onChange={(event) => setSnowDepth(event.target.value)} // when value is changed, it will get updated by this.
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
                </form>
            </div>
            </div>

        </>
    );
}

export default Customer;
