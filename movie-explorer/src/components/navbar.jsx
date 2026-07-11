import React from 'react'
import '../style/navbar.css'
import { User } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div id="logo">MovEx</div>
            <div id="profile">
                <div id="profile-text">My Profile</div>
                    <User />
            </div>
        </div>
    )
}

export default Navbar
