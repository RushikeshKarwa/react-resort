import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';


const Home = () => {
    return (
        <>
        <Hero >
            <Banner title="Luxurious Rooms" subtitle="delux rooms starting at ₹ 500">
                <Link to='/rooms' className="btn-primary"> Our Rooms</Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms></FeaturedRooms>
        
        </>
    )
}

export default Home;
