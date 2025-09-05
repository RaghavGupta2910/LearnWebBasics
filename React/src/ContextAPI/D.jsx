import React from 'react'
import E from './E'
import { GreetContext, Greet2Context } from './A'

const D = (props) => {
  return (
    // {// <GreetContext.Consumer>
    //     {/* {(val) => {
    //         return (
    //             <Greet2Context.Consumer>
    //                 {(val2) => {
    //                     return <h1>Greet: {val.greet}, {val2}</h1>
    //                 }}
    //             </Greet2Context.Consumer>
    //         )
    //     }} */}
    // /* </GreetContext.Consumer> */}
    <div>
        <E/>

    </div>
  )
}

export default D
