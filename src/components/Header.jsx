import React from "react";

export function Header({title}) {
    return (<>
        <div className='flex justify-content-between align-items-center bg-primary shadow-8 px-8'>
            <h1>
                DEMO Streaming
            </h1>
            <div className='flex align-items-center gap-5'>
                <a className='text-white no-underline' href='google.com'>Log In</a>
                <button className="bg-black-alpha-80 text-white p-2 cursor-pointer">Start your free trial</button>
            </div>
        </div>
        <div className="flex justify-content-start align-items-center text-white shadow-8 px-8">
            <h2>Popular {title}</h2>
        </div >
    </>)
}