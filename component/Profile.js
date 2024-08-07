import React from 'react';
import "./Profile.css";
import loading from '../img/loading.png';
import installation from '../img/installation.png';
import unloading from '../img/unloading.png';
import shifting from '../img/shifting.png';
import electrical from '../img/electrical.png';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1>Advik Enterprise</h1>
                <p>Specializing in machine installation, shifting, loading, and unloading.</p>
            </div>
            <div className="profile-section">
                <div className="profile-section-header">Contact Information</div>
                <div className="profile-field">
                    <span className="profile-label">Phone Number:</span>
                    <span className="profile-value">98226 23605 , 99214 89881 </span>
                </div>
                <div className="profile-field">
                    <span className="profile-label">WhatsApp Number:</span>
                    <span className="profile-value">98226 23605 , 99214 89881</span>
                </div>
                <div className="profile-field">
                    <span className="profile-label">Contact Person:</span>
                    <span className="profile-value">Pandit Gade & Sudhir Gade</span>
                </div>
                <div className="profile-field">
                    <span className="profile-label">Email:</span>
                    <span className="profile-value">sales.vedikaent1901@gmail.com</span>
                </div>
            </div>
            <div className="profile-section">
                <div className="profile-section-header">Our Services</div>
                <div className="profile-field">
                    <div className="profile-label">Machine Installation:</div>
                    <p className="profile-value">We specialize in installing various types of machinery with precision and care.</p>
                    <div className="profile-images">
                        <img src={installation} alt="Machine Installation" className="profile-image" />
                    </div>
                </div>
                <div className="profile-field">
                    <div className="profile-label">Shifting:</div>
                    <p className="profile-value">We provide reliable and efficient shifting services for all your machinery needs.</p>
                    <div className="profile-images">
                        <img src={shifting} alt="Shifting" className="profile-image" />
                    </div>
                </div>
                <div className="profile-field">
                    <div className="profile-label">Loading:</div>
                    <p className="profile-value">Our team ensures safe and efficient loading of all types of equipment.</p>
                    <div className="profile-images">
                        <img src={loading} alt="Loading" className="profile-image" />
                    </div>
                </div>
                <div className="profile-field">
                    <div className="profile-label">Unloading:</div>
                    <p className="profile-value">We provide unloading services with utmost care to prevent any damage.</p>
                    <div className="profile-images">
                        <img src={unloading} alt="Unloading" className="profile-image" />
                    </div>
                </div>
                <div className="profile-field">
                    <div className="profile-label">Electrical Work:</div>
                    <p className="profile-value">Our electrical services ensure all your installations meet safety standards.</p>
                    <div className="profile-images">
                        <img src={electrical} alt="Electrical Work" className="profile-image" />
                    </div>
                </div>
            </div>
            <div className="profile-section">
                <div className="profile-section-header">About Us</div>
                <p>We have over 13 years of experience in providing top-notch mechanical and electrical services.</p>
                <p>We have worked with prestigious companies like Mahindra, Plastic Omnium, Kalyani Technoforce, and many more.</p>
                <p>At Advik Enterprise, we believe that "Quality is not an act, it is a habit." We strive to exceed our customers' expectations by delivering the highest quality services and maintaining a commitment to continuous improvement.</p>
            </div>
            <div className="profile-section">
                <div className="profile-section-header">Why Choose Us</div>
                <p className="profile-value">Our commitment to excellence is unparalleled. Here are some reasons why you should choose Advik Enterprise:</p>
                <ul className="profile-value">
                    <li>13 years of industry experience</li>
                    <li>Highly skilled and trained professionals</li>
                    <li>Precision and care in every service</li>
                    <li>Trusted by prestigious companies</li>
                    <li>Commitment to safety and quality standards</li>
                    <li>Customer satisfaction is our top priority</li>
                </ul>
            </div>
            <div className="profile-thankyou">
                <p>Thanks for visiting our site! We look forward to working with you and helping you achieve your goals.</p>
            </div>
        </div>
    );
}

export default Profile;
