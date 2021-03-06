import { faFacebook, faGithub, faInstagram, faLinkedinIn, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from '../../images/image.gif'
const Home = () => {
    return (
        <div className="md:flex justify-between items-center mt-4">
            <div className="pl-4 pr-4 md:w-2/5 animate__animated animate__fadeInLeft">
                <h1 className="text-4xl font-bold">Hello, <span className="text-red-600">I'm Mehedy</span></h1>
                <p className="mt-4 text-justify">I am a Professional Web Developer. I can do HTML, CSS, JS React & others programming languages in professionally. I have learned web development since 2020. </p>
                <div className="mt-4">
                    <button className="bg-red-600 px-2 m-1 py-2 text-white hover:bg-red-800 rounded-lg">Subscribe</button>
                    <button className="bg-yellow-600 px-2 m-1 py-2 text-white hover:bg-yellow-800 rounded-lg">Connect with us!</button>
                </div>
                <div className="mt-3">
                    <a href="https://www.facebook.com/mehedysr"><FontAwesomeIcon className="m-1 hover:text-blue-600" icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/mehedy_sr/"><FontAwesomeIcon className="m-1 hover:text-red-600" icon={faInstagram} /></a>
                    <a href="https://www.youtube.com/"><FontAwesomeIcon className="m-1 hover:text-red-600" icon={faYoutube} /></a>
                    <a href="https://github.com/mdmehedyhassan"><FontAwesomeIcon className="m-1 hover:text-gray-500" icon={faGithub} /></a>
                    <a href="https://twitter.com/MdMehedyHassa10"><FontAwesomeIcon className="m-1 hover:text-blue-600" icon={faTwitterSquare} /></a>
                    <a href="https://www.linkedin.com/in/md-mehedy-hassan/"><FontAwesomeIcon className="m-1 hover:text-blue-600" icon={faLinkedinIn} /></a>
                </div>
            </div>
            <div className="md:w-3/5 animate__animated animate__fadeInRight">
                <img src={Image} alt="" />
            </div>
        </div>
    );
};

export default Home;