import "./Login.css";
import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Subcomponent for the back button
const BackToHome = () => {
    return (
        <Link to="/" className="back-btn">
            <ArrowLeft className="w-2 h-2 mr-2" />
            Back to home
        </Link>
    );
};

function Login() {
    return (
        <div className="login-wrapper">
            {/* Back button */}
            <BackToHome />

            {/* Logo */}
            <div className="logo-login">
                <div className="svg-stack3">
                    <svg className="snow-icon3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="#00bfff">
                        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                    </svg>
                    <svg className="base-icon3" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff">
                        <path d="M440-246 337-145q-11 11-27.5 11T282-146q-12-11-12-27.5t12-28.5l158-158v-80h-80L201-281q-11 11-27.5 11T145-282q-11-11-11-27.5t11-27.5l101-103H119q-17 0-28-11.5T80-480q0-17 11.5-28.5T120-520h126L145-622q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l158 158h80v-80L281-758q-11-11-11-27.5t12-28.5q11-11 27.5-11t27.5 11l103 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-100q11-11 27.5-11t28.5 11q11 12 11 28.5T678-758L520-600v80h80l158-158q11-11 27.5-11t28.5 12q11 11 11 27.5T814-622L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l100 103q11 11 11 27.5T814-282q-12 12-28.5 12T758-282L600-440h-80v80l158 159q11 11 11 27.5T677-145q-11 11-27.5 11T622-145L520-246v127q0 17-11.5 28T480-80q-17 0-28.5-11.5T440-120v-126Z" />
                    </svg>
                </div>
                <div className="logo-text2">
                    <h2>WinterShield</h2>
                </div>
            </div>

            {/* Login Heading */}
            <div className="login-container">
                <div className="welcome-back-text">
                    <h1 className="text-2xl font-bold text-blue-900">Welcome Back </h1>
                </div>
                <div className="log-back-container">
                    <p className="login-back-text">Log in to your WinterShield account</p>
                </div>
                <div className="email">
                    <p>Email</p>
                </div>

                <form action="#" className="login-form">
                    <div className="input-wrapper">
                        <input type="email" placeholder="name@example.com" className="input-field1" required />
                    </div>
                </form>
                <a href="#" className="forgot-pass-link">Forgot Password?</a>
                <div className="passoword-text"><p>Password </p></div>

                <form action="#" className="password-form">
                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" className="input-field2" required />
                    </div>
                </form>
                <div className="login-btn-container">
                    <button className="login-button">Log in</button></div>
                <div className="divider">
                    <hr />
                    <span>Or continue with</span>
                    <hr />
                </div>
                <div className="social-login">

                    <button className="google-login-btn">



                        <span> <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="google-icon">
                            <path d="M11.0811 30.2156L9.34063 36.7129L2.97939 36.8475C1.07832 33.3214 0 29.2871 0 25C0 20.8544 1.0082 16.945 2.79531 13.5027H2.79668L8.45996 14.541L10.9408 20.1703C10.4216 21.6841 10.1386 23.3091 10.1386 25C10.1388 26.8352 10.4712 28.5935 11.0811 30.2156Z" fill="#FBBB00" />
                            <path d="M49.5634 20.3297C49.8505 21.842 50.0002 23.4038 50.0002 25C50.0002 26.7899 49.812 28.5358 49.4535 30.2198C48.2365 35.9506 45.0565 40.9547 40.6514 44.4959L40.65 44.4946L33.5168 44.1306L32.5072 37.8283C35.4303 36.1141 37.7146 33.4314 38.918 30.2198H25.5498V20.3297H49.5634Z" fill="#518EF8" />
                            <path d="M40.6498 44.4946L40.6512 44.4959C36.3669 47.9396 30.9245 50 25.0001 50C15.4795 50 7.20205 44.6787 2.97949 36.8476L11.0812 30.2158C13.1924 35.8503 18.6278 39.8614 25.0001 39.8614C27.7391 39.8614 30.3051 39.1209 32.5069 37.8284L40.6498 44.4946Z" fill="#28B446" />
                            <path d="M40.9575 5.75547L32.8586 12.3859C30.5798 10.9615 27.886 10.1387 25.0001 10.1387C18.4836 10.1387 12.9465 14.3337 10.941 20.1703L2.79678 13.5027H2.79541C6.95615 5.48076 15.338 0 25.0001 0C31.066 0 36.6278 2.16074 40.9575 5.75547Z" fill="#F14336" />
                        </svg>
                            <p className="google-name">Sign in with Google</p>
                        </span>
                    </button>

                    <button className="meta-login-btn">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="meta-icon">
                                <path fill="#0081fb" d="M47,29.36l-2.193,1.663L42.62,29.5c0-0.16,0-0.33-0.01-0.5c0-0.16,0-0.33-0.01-0.5	c-0.14-3.94-1.14-8.16-3.14-11.25c-1.54-2.37-3.51-3.5-5.71-3.5c-2.31,0-4.19,1.38-6.27,4.38c-0.06,0.09-0.13,0.18-0.19,0.28	c-0.04,0.05-0.07,0.1-0.11,0.16c-0.1,0.15-0.2,0.3-0.3,0.46c-0.9,1.4-1.84,3.03-2.86,4.83c-0.09,0.17-0.19,0.34-0.28,0.51	c-0.03,0.04-0.06,0.09-0.08,0.13l-0.21,0.37l-1.24,2.19c-2.91,5.15-3.65,6.33-5.1,8.26C14.56,38.71,12.38,40,9.51,40	c-3.4,0-5.56-1.47-6.89-3.69C1.53,34.51,1,32.14,1,29.44l4.97,0.17c0,1.76,0.38,3.1,0.89,3.92C7.52,34.59,8.49,35,9.5,35	c1.29,0,2.49-0.27,4.77-3.43c1.83-2.53,3.99-6.07,5.44-8.3l1.37-2.09l0.29-0.46l0.3-0.45l0.5-0.77c0.76-1.16,1.58-2.39,2.46-3.57	c0.1-0.14,0.2-0.28,0.31-0.42c0.1-0.14,0.21-0.28,0.31-0.41c0.9-1.15,1.85-2.22,2.87-3.1c1.85-1.61,3.84-2.5,5.85-2.5	c3.37,0,6.58,1.95,9.04,5.61c2.51,3.74,3.82,8.4,3.97,13.25c0.01,0.16,0.01,0.33,0.01,0.5C47,29.03,47,29.19,47,29.36z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1" x1="42.304" x2="13.533" y1="24.75" y2="24.75" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0081fb"></stop><stop offset=".995" stopColor="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXa_PvvcWRWxRKSR_gr1)" d="M4.918,15.456	C7.195,11.951,10.483,9.5,14.253,9.5c2.184,0,4.354,0.645,6.621,2.493c2.479,2.02,5.122,5.346,8.419,10.828l1.182,1.967	c2.854,4.746,4.477,7.187,5.428,8.339C37.125,34.606,37.888,35,39,35c2.82,0,3.617-2.54,3.617-5.501L47,29.362	c0,3.095-0.611,5.369-1.651,7.165C44.345,38.264,42.387,40,39.093,40c-2.048,0-3.862-0.444-5.868-2.333	c-1.542-1.45-3.345-4.026-4.732-6.341l-4.126-6.879c-2.07-3.452-3.969-6.027-5.068-7.192c-1.182-1.254-2.642-2.754-5.067-2.754	c-1.963,0-3.689,1.362-5.084,3.465L4.918,15.456z"></path><linearGradient id="wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2" x1="7.635" x2="7.635" y1="32.87" y2="13.012" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0081fb"></stop><stop offset=".995" stopColor="#0064e1"></stop></linearGradient><path fill="url(#wSMw7pqi7WIWHewz2_TZXb_PvvcWRWxRKSR_gr2)" d="M14.25,14.5	c-1.959,0-3.683,1.362-5.075,3.465C7.206,20.937,6,25.363,6,29.614c0,1.753-0.003,3.072,0.5,3.886l-3.84,2.813	C1.574,34.507,1,32.2,1,29.5c0-4.91,1.355-10.091,3.918-14.044C7.192,11.951,10.507,9.5,14.27,9.5L14.25,14.5z"></path><path d="M21.67,20.27l-0.3,0.45l-0.29,0.46c0.71,1.03,1.52,2.27,2.37,3.69l0.21-0.37c0.02-0.04,0.05-0.09,0.08-0.13 c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27z M24.94,15.51c-0.11,0.14-0.21,0.28-0.31,0.42 c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c0.04-0.06,0.07-0.11,0.11-0.16c0.06-0.1,0.13-0.19,0.19-0.28 c-0.76-1.12-1.5-2.13-2.23-3.03C25.15,15.23,25.04,15.37,24.94,15.51z" opacity=".05"></path><path d="M21.67,20.27l-0.3,0.45c0.71,1.02,1.51,2.24,2.37,3.65c0.09-0.17,0.19-0.34,0.28-0.51C23.19,22.5,22.39,21.29,21.67,20.27 z M24.63,15.93c0.73,0.91,1.47,1.94,2.25,3.1c0.1-0.16,0.2-0.31,0.3-0.46c-0.77-1.14-1.52-2.16-2.24-3.06 C24.83,15.65,24.73,15.79,24.63,15.93z" opacity=".07"></path>
                            </svg>
                            <p className="meta-name">Sign in with Meta</p>
                        </span>
                    </button>
                </div>
                <p className="text-sm text-gray-700">
                    Don't have an account? {' '}
                    <Link to="/" className="sign-up-link">
                        Sign up
                    </Link>
                </p>
            </div >
        </div >
    );
}

export default Login;