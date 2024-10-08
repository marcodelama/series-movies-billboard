import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Header, Footer } from "../pure/Navegation";
import Cards from '../Cards'
import data from '../../data/sample.json';
import '../../styles/cartelera.css'
import { endLoading, startLoading } from "../../redux/isLoadingSlice";

export default function Cartelera({ programType }) {
    const dispatch = useDispatch();

    const [filtroDiez, setFiltroDiez] = useState();

    const releaseYearTwentyTen = () => {
        let years = data.entries
            .filter(serie => serie.releaseYear >= 2010 && serie.programType === programType)
            .sort((a, b) => a.title.localeCompare(b.title))
            .slice(0, 20)
        setFiltroDiez(years)
    }

    const fetchImages = async () => {
        try {
            await Promise.all([
                releaseYearTwentyTen()
            ])
        }
        finally {
            dispatch(endLoading());
        }
    }

    useEffect(() => {
        dispatch(startLoading());
        fetchImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (<>
        <Header title={programType} />
        <div className="flex justify-content-between flex-wrap bg-white-alpha-80 gap-2 p-8">
            {filtroDiez?.map(item => (<Cards title={item.title} image={item.images.poster_art.url} item={item} />))}
        </div>
        <Footer />
    </>)
}