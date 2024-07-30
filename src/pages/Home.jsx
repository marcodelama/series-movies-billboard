import React from "react";
import { Header, Footer, CardCartelera } from '../components/index'
import '../styles/home.css'

export function Home() {
    return (
        <div className="min-h-screen">
            <Header title="Titles" />
            <div className="p-7 gap-5 flex vista-cartelera-responsive bg-white-alpha-80">
                <CardCartelera title='SERIES' subtitle='Popular Series' />
                <CardCartelera title='MOVIES' subtitle='Popular Movies' />
            </div>
            <Footer />
        </div>
    )
}