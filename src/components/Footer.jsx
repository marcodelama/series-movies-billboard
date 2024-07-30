import React from "react";
import facebook from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import instagram from '../assets/social/instagram-white.svg'
import appstore from '../assets/store/app-store.svg';
import playstore from '../assets/store/play-store.svg';
import windowstore from '../assets/store/windows-store.svg';

export function Footer() {
    return (
        <div className="text-white px-8 py-4">
            <div className="flex flex-wrap align-items-center justify-content-between w-6 lista-home-footer">
                <p>Home</p>|
                <p>Terms and Conditions</p>|
                <p>Privacy Policy</p>|
                <p>Collection Statement</p>|
                <p>Help</p>|
                <p>Manage Account</p>
                <p className="text-gray-500">Copyright © 2016 DEMO Streaming. All Rights Reserved</p>
            </div>
            <div className="flex mt-7">
                <div className="flex justify-content-between align-items-center w-2">
                    <a href="https://facebook.com"><img className="h-2rem" src={facebook} alt="facebook" /></a>
                    <a href="https://twitter.com"><img className="h-2rem" src={twitter} alt="twitter" /></a>
                    <a href="https://instagram.com"><img className="h-2rem" src={instagram} alt="instagram" /></a>
                </div>
                <div className="flex justify-content-end gap-4 w-9">
                    <a href="#appstore"><img className="h-3rem" src={appstore} alt="appstore" /></a>
                    <a href="#googleplay"><img className="h-3rem" src={playstore} alt="google" /></a>
                    <a href="#microsoft"><img className="h-3rem" src={windowstore} alt="microsoft" /></a>
                </div>
            </div>
        </div>
    )
}