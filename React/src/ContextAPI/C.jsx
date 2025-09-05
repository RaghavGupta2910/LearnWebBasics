import React from 'react'
import D from './D'

const C = (props) => {
    return (
        <div>
            {/* this is a way of chained props passsing, a better was to do is using context (used in D) and much better my useConetxt(used in E) */}
            {/* <h1>Greet : {props.greet}</h1>  */}
            {/* <D greet = {props.greet}/> */}
            <D/>
        </div>
    )
}

export default C
