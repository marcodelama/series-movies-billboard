import React from "react";
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";
import billboardBackgroud from '../assets/placeholder.png'

export function CardCartelera({ title, subtitle }) {
    return (
        <div>
            <Link to={title === 'SERIES' ? '/series' : '/movies'}>
                <Card className="bg-black-alpha-90 text-white py-8 px-6 cursor-pointer">
                    <div className="card-container">
                        <img className="card-image" src={billboardBackgroud} alt="billboardBackgroud" />
                        <div className="overlay-text">{title}</div>
                    </div>
                </Card>
            </Link>
            <p className="flex">{subtitle}</p>
        </div>
    )
}