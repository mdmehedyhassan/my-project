import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from '../../images/image.gif'
const Home = () => {
    return (
        <div className="flex justify-between items-center mt-4">
            <div className="pl-20 w-2/5 animate__animated animate__heartBeat">
                <h1 className="text-4xl font-bold">Welcome to <span className="text-red-600">Mehedy</span> website</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore eligendi assumenda voluptates atque reprehenderit consectetur eius dolorem cumque optio neque?</p>
                <div className="mt-4">
                    <button className="bg-red-600 px-2 m-1 py-2 text-white hover:bg-red-800 rounded-lg">Subscribe</button>
                    <button className="bg-yellow-600 px-2 m-1 py-2 text-white hover:bg-yellow-800 rounded-lg">Connect with us!</button>
                </div>
                <a href="https://www.facebook.com/mehedysr"><FontAwesomeIcon className="m-1 hover:text-blue-600" icon={faFacebook} /></a>
                <a href="https://www.instagram.com/mehedy_sr/"><FontAwesomeIcon className="m-1 hover:text-red-600" icon={faInstagram} /></a>
                <a href="https://www.youtube.com/"><FontAwesomeIcon className="m-1 hover:text-red-600" icon={faYoutube} /></a>
                <a href="https://github.com/mdmehedyhassan"><FontAwesomeIcon className="m-1 hover:text-gray-500" icon={faGithub} /></a>
                <a href="https://twitter.com/MdMehedyHassa10"><FontAwesomeIcon className="m-1 hover:text-blue-600" icon={faTwitterSquare} /></a>
                <a href="https://www.linkedin.com/in/md-mehedy-hassan/"><FontAwesomeIcon className="m-1 hover:text-blue-600" icon={faLinkedinIn} /></a>
            </div>
            <div className="w-3/5 animate__animated animate__jackInTheBox animate__delay-1s">
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default Home;