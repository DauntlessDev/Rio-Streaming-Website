import React from 'react'
import longpicture from '../../../assets/images/sample_image_long.jpg'

export default function GenreCard() {
    return (
        <div class="genre-card card">
            <li>
                <h6>Suicide Squad</h6>
                <img src={longpicture} alt='sample' />
            </li>
        </div>
    )
}
