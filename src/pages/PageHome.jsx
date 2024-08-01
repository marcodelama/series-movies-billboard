import React from "react";
import { Header, Footer } from '../components/pure/Navegation'
import CardOpciones from '../components/pure/home/CardOpciones'
import '../styles/home.css'

export function PageHome() {
    return (
        <div className="min-h-screen">
            <Header title="Titles" />
            <div className="p-7 gap-5 flex vista-cartelera-responsive bg-white-alpha-80">
                <CardOpciones title='SERIES' subtitle='Popular Series' />
                <CardOpciones title='MOVIES' subtitle='Popular Movies' />
            </div>
            <Footer />
        </div>
    )
}