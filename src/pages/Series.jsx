import React, { useEffect, useState } from "react";
import { Header, Cards, Footer } from "../components";
import data from '../data/sample.json';
import '../styles/series.css'

export function Series() {

    const [filtroDiez, setFiltroDiez] = useState();

    const releaseYearTwentyTen = () => {
        let years = data.entries
            .filter(serie => serie.releaseYear >= 2010 && serie.programType === 'series')
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20)
        setFiltroDiez(years)
    }

    useEffect(() => {
        releaseYearTwentyTen();
    }, [])

    return (<>
        <Header title='Series' />
        <div className="flex justify-content-between flex-wrap bg-white-alpha-80 gap-2 p-8">
            {filtroDiez?.map(item => (<Cards title={item.title} image={item.images.poster_art.url} />))}
        </div>
        <Footer />
    </>)
}