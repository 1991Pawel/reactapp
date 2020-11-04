import React from 'react'
import '../styles/home.scss'
import SearchBar from '../components/SearchBar'


const Home = () => (
    <div className="home">
        <div className="home__container">
            <div className="home__content">
                <h1 className="home__title">Unsplash</h1>
                <p className="home__desc">
                    The internet’s source of freely-usable images.
                    Powered by creators everywhere.
                </p>
            </div>
            <SearchBar width={50} height={50} />
        </div>
    </div>

)
export default Home;