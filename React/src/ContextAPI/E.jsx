import React, { useContext } from 'react'
import { GreetContext } from './A'

const E = () => {
    const useCon = useContext(GreetContext)
    return (
        <div>
            <h1>Greet: {useCon.greet} {useCon.greet3}</h1>
        </div>
    )
}

export default E
