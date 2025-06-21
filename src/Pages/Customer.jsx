<<<<<<< HEAD

=======
import React, { useState } from 'react';
import './Customer.css'
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
// useState is a react hook(special function that allows functional components in React to "hook into" React features like state)
//  that is used to track and manage state
// The function assigned to onChange is executed every time the value of the input element changes. 
// For text inputs, this means it fires on every keystroke, paste, or other modification to the input's content.


import useLocalStorage from '../Components/useLocalStorage';
function Customer() {

    let [value, setValue] = useLocalStorage('name', '')
    return (
        <>
            <h1 className="customer-header">Fast Snow Removal. Anytime.</h1>
            <div className="customer-requests">
                <form action="" className="requests">
                    <div className="input-address">
                        <input type="address" placeholder="Address" className="address-form"
                            required onChange={(event) => setValue(event.target.value)} value={value} />
                    </div>
                    {/* value will have a input, that will be updated with new additions */}
                    <div className="input-">
                        <input type="address" placeholder="Address" className="address-form" required />
                    </div>


                </form>

            </div>
        </>
    );
}

export default Customer;
>>>>>>> new
