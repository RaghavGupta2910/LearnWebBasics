import React, { useState, useRef, useEffect } from 'react'

const UseRef1 = () => {
    const [input, setInput] = useState("")

    // without using useState as it can render +1 times than the actual so we use useRef
    // const [render, setRender] = useState(0)

    // useEffect(() => {
    //     setRender(render+1)
    // },[input])

    const render = useRef(0)
    useEffect(() => {
        render.current = render.current + 1
    })

    return (
        <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        <h1>This has rendered {render.current} times</h1>
        </div>
    )
}

export default UseRef1
