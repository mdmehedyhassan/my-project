import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="flex justify-between px-24 h-16 items-center">
                <div>
                    <h1 className="text-3xl">TailwidLOGO</h1>
                </div>
                <div >
                    <a className="text-xl px-4" href="#home">Home</a>
                    <a className="text-xl px-4" href="#abut">About</a>
                    <a className="text-xl px-4" href="#blog">Blog</a>
                    <a className="text-xl px-4" href="#contact">Contact</a>
                    <button className="text-xl px-4 bg-red-500 hover:bg-red-700 py-2 text-white rounded-lg" href="#login">Login</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;