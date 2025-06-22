import React, { useState } from 'react';
import './Customer.css';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import useLocalStorage from '../Components/useLocalStorage';

function Customer() {
    // useState to manage the address input. 'address' is the current value, 'setAddress' updates it.
    // We're using useLocalStorage here to persist the address even if the user leaves the page.
    let [address, setAddress] = useLocalStorage('address', '');

    // useState for the date and time input.
    let [dateTime, setDateTime] = useState('');

    // useState for the snow depth. Initial value is 6 inches.
    let [snowDepth, setSnowDepth] = useState('6'); // Default to 6 inches

    // This function runs when the form is submitted.
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the browser from reloading the page
        console.log('Form submitted!');
        console.log('Address:', address);
        console.log('Date/Time:', dateTime);
        console.log('Snow Depth:', snowDepth);
        // Here you would typically send this data to a server or process it further.
        alert(`Snow removal request for ${address} on ${dateTime} for ${snowDepth} inches of snow has been submitted!`);
    };

    return (
        <>
            <h1 className="customer-header">Fast Snow Removal. Anytime.</h1>
            <p className="customer-subtext">Request snow shoveling in seconds.</p>
            <button className="request-now">Request Now</button>
            <div className="customer-requests">
                {/* When the form is submitted, the handleSubmit function will run. */}
                <form className="requests" onSubmit={handleSubmit}>
                    <div className="input-address">
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text" // This is a simple text input for the address.
                            id="address"
                            placeholder="Enter your address"
                            className="address-form"
                            required
                            // When the input changes, update the 'address' state.
                            onChange={(event) => setAddress(event.target.value)}
                            value={address} // The input's value is controlled by the 'address' state.
                        />
                    </div>

                    <div className="input-datetime">
                        <label htmlFor="datetime">Date & Time:</label>
                        <input
                            type="datetime-local" // This input type provides a date and time picker.
                            id="datetime"
                            className="address-form" // Reusing the style for consistency
                            required
                            // When the input changes, update the 'dateTime' state.
                            onChange={(event) => setDateTime(event.target.value)}
                            value={dateTime} // The input's value is controlled by the 'dateTime' state.
                        />
                    </div>

                    <div className="input-snow-depth">
                        <label htmlFor="snow-depth">Snow Depth (inches):</label>
                        {/* A select (dropdown) for snow depth */}
                        <select
                            id="snow-depth"
                            className="address-form" // Reusing the style for consistency
                            required
                            // When the selection changes, update the 'snowDepth' state.
                            onChange={(event) => setSnowDepth(event.target.value)}
                            value={snowDepth} // The select's value is controlled by the 'snowDepth' state.
                        >
                            <option value="">Select Depth</option> {/* Default placeholder */}
                            <option value="2">2 inches</option>
                            <option value="4">4 inches</option>
                            <option value="6">6 inches</option>
                            <option value="8">8 inches</option>
                            <option value="10">10+ inches</option>
                        </select>

                        {/* Alternatively, you could use a range slider for snow depth like this: */}
                        {/* <input
                            type="range"
                            id="snow-depth-range"
                            min="2"
                            max="12"
                            step="2"
                            onChange={(event) => setSnowDepth(event.target.value)}
                            value={snowDepth}
                        />
                        <span>{snowDepth} inches</span> */}
                    </div>

                    <button type="submit" className="submit-button">Request Snow Removal</button>
                </form>
            </div>
        </>
    );
}

export default Customer;