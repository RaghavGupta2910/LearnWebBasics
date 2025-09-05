import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [clicked, setCLicked] = useState()    
    
    useEffect(() => {
        alert("you clicked a button!")
    }, [])

    return (
        <div>
        <button onClick={() => {setCLicked("Subscribe")}}>Subsribe</button>
        <br/>
        <hr/>
        <button onClick={() => {setCLicked("To")}}>To</button>
        <br/>
        <hr/>
        <button onClick={() => {setCLicked("Raghav")}}>Raghav</button>
        <br/>
        <hr/>
        <h1>{clicked}</h1>
        </div>
    )
}

export default UseEffect
