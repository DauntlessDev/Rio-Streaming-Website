import React from 'react'
import originalpicture from '../../assets/images/sample_image.jpg'
import longpicture from '../../assets/images/sample_image_long.jpg'

export default function Home() {

    return (
        <div id="home">
            <div class="list originals">
                <h1>Netflix Originals</h1>
                <ul>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                    <li><img src={originalpicture} alt='sample' /></li>
                </ul>

            </div>
            <div class="list genre romance">
                <h1>Romance Movies</h1>
                <ul>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                </ul>
            </div>
            <div class="list genre horror">
                <h1>Horror Movies</h1>
                <ul>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                </ul>
            </div>
            <div class="list genre documentaries">
                <h1>Documentaries</h1>
                <ul>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                    <li><img src={longpicture} alt='sample' /></li>
                </ul>
            </div>


        </div>
    )
}
