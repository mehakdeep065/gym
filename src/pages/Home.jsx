import React from 'react'
import Navbar from '../components/Navbar'
import Poster from '../components/Poster'
import Training from '../components/Training'
import Features from '../components/Features'
import Form from '../components/Form'
import Footer from '../components/Footer'


function Home() {
    return (
        <>
            <Navbar/>
            <Poster />
            <Training Img="ST.png" />
            <Training Img="Zumba.png" />
            <Training Img="MMA.png" />
            <Features/>
            <Form/>
            <Footer/>
        </>
    )
}

export default Home
