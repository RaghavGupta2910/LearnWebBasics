import React, { createContext } from 'react'
import B from './B'

const GreetContext = createContext()
const Greet2Context = createContext()

const A = () => {
    const greet = "Hello"
    const greet2 = "Heyy"
    const greet3 = "Hola"
    return (
        <div>
            <GreetContext.Provider value={{greet, greet3}}>
                <Greet2Context.Provider value = {greet2}>
                    <B greet = {greet}/>
                </Greet2Context.Provider>
            </GreetContext.Provider>
        </div>
    )
}

export default A
export {GreetContext, Greet2Context}
