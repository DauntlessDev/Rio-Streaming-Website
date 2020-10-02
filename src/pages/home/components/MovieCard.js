import React from 'react'
import originalpicture from '../../../assets/images/sample_image.jpg'

export default function MovieCard() {
    return (
        <div className="movie-card card">
            <li>
                <h6>Money Heist</h6>
                <img src={originalpicture} alt='sample' />
            </li>
        </div>
    )
}
