import { Instagram, LocationCity, MyLocation } from '@material-ui/icons';
import React from 'react';
import '../../style/Footer.scss';

const Footer = () => {
    return (
        <div className="Footer" id="Footer">
            <div className="container">
                <div className="right">
                    
                    <h1>Picsmania</h1>
                    <MyLocation></MyLocation>
                    <p>Sylhet, Bangladesh</p>
                </div>
                <div className="left">
                    <p>Follow us on Instagram</p>
                    <a target="_blank" href="https://instagram.com"><Instagram className="icon"></Instagram></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;