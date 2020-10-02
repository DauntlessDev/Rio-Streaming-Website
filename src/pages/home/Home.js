import React from 'react'
import GenreCard from './components/GenreCard'
import MovieCard from './components/MovieCard'

export default function Home() {

    return (
        <div id="home">
            <div class="list originals">
                <h1>Netflix Originals</h1>
                <ul>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </ul>

            </div>
            <div class="list genre romance">
                <h1>Romance Movies</h1>
                <ul>
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                </ul>
            </div>
            <div class="list genre horror">
                <h1>Horror Movies</h1>
                <ul>
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                </ul>
            </div>
            <div class="list genre documentaries">
                <h1>Documentaries</h1>
                <ul>
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                    <GenreCard />
                </ul>
            </div>


        </div>
    )
}
