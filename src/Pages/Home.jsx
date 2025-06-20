import React from 'react';
import './Home.css'
import SnowShovel from "../assets/images/snow-shovel.jpg"
import { useNavigate } from 'react-router-dom';


function loginClick() {
    alert("clicked")

}
function Home() {
    const navigate = useNavigate()

    return (

        <div className="app">
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
            <div className="hero-section">
                <div className="hero-text">
                    <h1>
                        <span className="dark-blue">Snow removal</span><br />
                        <span className="dark-blue">made </span>
                        <span className="bright-blue">simple</span>
                    </h1>
                    <div className="description-wrapper">
                        <p>
                            <span className="description-p1">Connect with local snow shovelers in your area. Have your driveway or walkway cleared</span><br />
                            <span className="description-p1">quickly and reliably.</span>
                        </p>
                        <div className="option-buttons">
                            <button className="shovelling" onClick={() => navigate("customer")}>I need shovelling</button>
                            <button className="shoveler">I want to shovel</button>
                        </div>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={SnowShovel} alt="Snow shoveling service" className="hero-image" />
                </div>

            </div>
            <div className="how-section">
                <h1 className="how">How it works</h1>
                <p className="simple-text">simple steps to get your snow cleared or start earning</p>
            </div>
            <div className="info-wrapper">
                <div className="location-info">
                    <svg className="location-icon"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        id="mdi-map-marker-outline" viewBox="0 0 24 24">
                        <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                    </svg>
                    <h1 className="location-sub1">Post a job</h1>
                    <p className="location-sub2">Describe your needs, location, and when you need it done</p>
                </div>

                <div className="matched-info">
                    <svg className="matched-icon"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg" id="mdi-account-clock-outline"
                        viewBox="0 0 24 24">
                        <path d="M16,14H17.5V16.82L19.94,18.23L19.19,19.53L16,17.69V14M17,12A5,5 0 0,0 12,17A5,5 0 0,0 17,22A5,5 0 0,0 22,
      17A5,5 0 0,0 17,12M17,10A7,7 0 0,1 24,17A7,7 0 0,1 17,24C14.21,24 11.8,22.36 10.67,20H1V17C1,14.34 6.33,13 9,13C9.6,13 10.34,13.07 11.12,13.2C12.36,11.28 14.53,10 17,10M10,17C10,16.3 10.1,15.62 10.29,15C9.87,14.93 9.43,14.9 9,14.9C6.03,14.9 2.9,16.36 2.9,17V18.1H10.09C10.03,17.74 10,17.37 10,17M9,4A4,4 0 0,1 13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4M9,5.9A2.1,2.1 0 0,0 6.9,8A2.1,2.1 0 0,0 9,10.1A2.1,2.1 0 0,0 11.1,8A2.1,2.1 0 0,0 9,5.9Z" />
                    </svg>
                    <h1 className="matched-sub1">Get matched</h1>
                    <p className="matched-sub2">Local shovelers will respond with their availability and rates</p>
                </div>
                <div className="payment-info">
                    <svg className="payment-icon"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-credit-card-outline" viewBox="0 0 24 24">
                        <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                    <h1 className="payment-sub1">Pay Securely</h1>
                    <p className="payment-sub2">Only pay when the job is completed to your satisfaction</p>
                </div>
            </div>
            <div className="why-choose">
                <h1 className="why-text">Why Choose WinterShield</h1>
                <p className='why-smaller-text'>We make snow removal hassle-free for everyone</p>
            </div>
            <div className="whywhy">
                <div className="why-wrapper">
                    <div className="verified-info">
                        <svg className="verified-icon"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-shield-outline"
                            viewBox="0 0 24 24"><path d="M21,11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 
        3,11V5L12,1L21,5V11M12,21C15.75,20 19,15.54 19,11.22V6.3L12,3.18L5,6.3V11.22C5,15.54 8.25,20 12,21Z" />
                        </svg>
                        <h1 className="verified-sub1">Verified Shovelers</h1>
                        <p className="verified-sub2">All service providers are background-checked and verified</p>
                    </div>
                    <div className="gps-info">
                        <svg className="gps-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            id="mdi-map-marker-outline" viewBox="0 0 24 24">
                            <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z" />
                        </svg>
                        <h1 className="gps-sub1">GPS Tracking</h1>
                        <p className="gps-sub2">Find nearby shovelers and track their arrival in real-time</p>
                    </div>
                    <div className="review-info">
                        <svg className="review-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" id="mdi-account-star-outline" viewBox="0 0 24 24">
                            <path d="M15,4A4,4 0 0,1 19,8A4,4 0 0,1 15,12A4,4 0 0,1 11,8A4,4 0 0,1 15,4M15,5.9A2.1,2.1 0 0,0 
            12.9,8A2.1,2.1 0 0,0 15,10.1C16.16,10.1 17.1,9.16 17.1,8C17.1,6.84 16.16,5.9 15,5.9M15,13C17.67,13 23,14.33 23,
            17V20H7V17C7,14.33 12.33,13 15,13M15,14.9C12,14.9 8.9,16.36 8.9,17V18.1H21.1V17C21.1,16.36 17.97,14.9 15,14.9M5,13.28L2.5,14.77L3.18,11.96L1,10.08L3.87,9.83L5,7.19L6.11,9.83L9,10.08L6.8,11.96L7.45,14.77L5,13.28Z" />
                        </svg>
                        <h1 className="review-sub1">Ratings & Reviews</h1>
                        <p className="review-sub2">Choose shovelers based on their performance and reliability</p>
                    </div>
                </div>
                <div className="why-wrapper-two">
                    <div className="paymentsecond-info">
                        <svg className="paymentsecond-icon"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" id="mdi-account-credit-card-outline" viewBox="0 0 24 24">
                            <path d="M7 4C4.8 4 3 5.8 3 8S4.8 12 7 12 11 10.2 11 8 9.2 4 7 4M7 10C5.9 10 5 9.1 5 8S5.9 6 7 6 9 6.9 9 8 8.1 10 7 10M7 14C3.1 14 0 15.8 0 18V20H11V18H2C2 17.4 3.8 16 7 16C8.8 16 10.2 16.5 11 17V14.8C9.9 14.3 8.5 14 7 14M22 4H15C13.9 4 13 4.9 13 6V18C13 19.1 13.9 20 15 20H22C23.1 20 24 19.1 24 18V6C24 4.9 23.1 4 22 4M16 18H15V6H16V18M22 18H18V6H22V18Z" />
                        </svg>
                        <h1 className="paymentsecond-sub1">Secure Payments</h1>
                        <p className="paymentsecond-sub2">Pay through our secure platform with multiple payment options</p>
                    </div>
                    <div className="notifications-info">
                        <svg className="notifications-icon"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-bell-ring" viewBox="0 0 24 24">
                            <path d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z" />
                        </svg>
                        <h1 className="notifications-sub1">Real-time Notifications</h1>
                        <p className="notifications-sub2">Stay updated with job status and communication</p>
                    </div>
                    <div className="weather-info">
                        <svg className="weather-icon"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-clouds" viewBox="0 0 24 24">
                            <path d="M19.19 12.07C19.69 11.54 20 10.82 20 10C20 8.3 18.7 6.84 17 6.84H14.2C14.2 4.17 12.03 2 9.36 2C7.31 2 5.56 3.28 4.85 5.08C2.72 5.14 1 6.89 1 9.04C1 11.22 2.78 13 4.96 13H8.1C8.04 13.33 8 13.66 8 14H7.5C5.57 14 4 15.57 4 17.5S5.57 21 7.5 21H18.5C21 21 23 19 23 16.5C23 14.26 21.34 12.41 19.19 12.07M18.5 19H7.5C6.67 19 6 18.33 6 17.5S6.67 16 7.5 16H10V14C10 12.07 11.57 10.5 13.5 10.5S17 12.07 17 14H18.5C19.88 14 21 15.12 21 16.5S19.88 19 18.5 19Z" />
                        </svg>
                        <h1 className="weather-sub1">Weather Alerts</h1>
                        <p className="weather-sub2">Get notified about upcoming snowfall in your area</p>
                    </div>
                </div>
            </div>
            <div className="user-experience">
                <div className="user-section">
                    <h1 className="user-text">What our users say</h1>
                    <p className="user-smaller-text">Join thousands of satisfied users across the city</p>
                </div>


                <div className="customer-reveiw-section">
                    <div className="customer-info">
                        <svg className="customer-star-icon"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-account-star" viewBox="0 0 24 24">
                            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />
                        </svg>

                        <p className="customer-text1">
                            "I was able to get my driveway cleared within hours of a heavy snowfall. The app is so easy to use and the shoveler did an excellent job!"
                        </p>

                        <div className="customer-profile-wrapper">
                            <svg
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-account-circle" viewBox="0 0 24 24">
                                <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                            </svg>

                            <div className="customer-details">
                                <p className="customer-name1">Sarah Johnson</p>
                                <p className="customer-type1">Homeowner</p>
                            </div>
                        </div>
                    </div>
                    <div className="customer-info2">
                        <svg className="customer-star-icon2"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-account-star" viewBox="0 0 24 24">
                            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />
                        </svg>

                        <p className="customer-text2">
                            "As a college student, this app has been a great way to earn extra money during winter breaks. The flexible schedule works perfectly with my classes."
                        </p>

                        <div className="customer-profile-wrapper2">
                            <svg
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-account-circle" viewBox="0 0 24 24">
                                <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                            </svg>

                            <div className="customer-details2">
                                <p className="customer-name2">Mike Thompson</p>
                                <p className="customer-type2">Shoveler</p>
                            </div>
                        </div>
                    </div>
                    <div className="customer-info3">
                        <svg className="customer-star-icon3"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-account-star" viewBox="0 0 24 24">
                            <path d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z" />
                        </svg>

                        <p className="customer-text3">
                            "I'm an elderly resident and can't shovel snow myself anymore. This app has been a lifesaver during our harsh winters. Reliable service every time!"
                        </p>

                        <div className="customer-profile-wrapper2">
                            <svg
                                fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="mdi-account-circle" viewBox="0 0 24 24">
                                <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
                            </svg>

                            <div className="customer-details3">
                                <p className="customer-name3">Robert Garcia</p>
                                <p className="customer-type3">Homeowner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ready-section">
                <h1 className="ready-text">Ready to get started?</h1>
                <b><p className="ready-small-text">Join our community today and experience hassle-free snow removal</p></b>
                <button className="ready-button1">I need shoveling</button>
                <button className="ready-button2">I want to shovel</button>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo-text-container">
                            <div className="svg-stack2">
                                <svg className="snow-icon2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="#00bfff">
                                    <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
                                </svg>
                                <svg className="base-icon2" xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#ffffff">
                                    <path d="M440-246 337-145q-11 11-27.5 11T282-146q-12-11-12-27.5t12-28.5l158-158v-80h-80L201-281q-11 11-27.5 11T145-282q-11-11-11-27.5t11-27.5l101-103H119q-17 0-28-11.5T80-480q0-17 11.5-28.5T120-520h126L145-622q-11-11-11-27.5t12-28.5q11-11 27.5-11t28.5 11l158 158h80v-80L281-758q-11-11-11-27.5t12-28.5q11-11 27.5-11t27.5 11l103 100v-126q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v126l102-100q11-11 27.5-11t28.5 11q11 12 11 28.5T678-758L520-600v80h80l158-158q11-11 27.5-11t28.5 12q11 11 11 27.5T814-622L714-520h126q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440H714l100 103q11 11 11 27.5T814-282q-12 12-28.5 12T758-282L600-440h-80v80l158 159q11 11 11 27.5T677-145q-11 11-27.5 11T622-145L520-246v127q0 17-11.5 28T480-80q-17 0-28.5-11.5T440-120v-126Z" />
                                </svg>
                            </div>
                            <div className="logo-text">
                                <h2>WinterShield</h2>
                                <p>Your trusted partner for quick and reliable snow removal.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">How It Works</a></li>
                            <li><a href="#">Become a Shoveler</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>Email: support@wintershield.ca</p>
                        <p>Phone: (XXX) XXX-XXXX</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} WinterShield. All rights reserved.</p>
                </div>
            </footer>











        </div>

    )
}
export default Home



