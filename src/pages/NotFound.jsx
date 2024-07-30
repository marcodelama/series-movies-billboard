import React from "react";
import { Header, Footer } from "../components";

export function NotFound(){
    return(<>
        <Header/>
        <div className="bg-white h-30rem">
        <p className="m-0 px-8 pt-5">Oops, something went wrong...</p>
        </div>
        <Footer/>
    </>)
}