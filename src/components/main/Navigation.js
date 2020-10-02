import React from 'react'
import logo from "../../assets/images/logo.jpg"

export default function Navigation() {
    return (
        <div id="navigation">
            <img src={logo} />
            <ul>
                <li><a href="">home</a></li>
                <li><a href="">movies</a></li>
                <li><a href="">series</a></li>
                <li><a href="">kids</a></li>
            </ul>
        </div>
    )
}
