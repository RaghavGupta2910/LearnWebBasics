import React from "react";
import "/src/intro/App.css";

function App(){
    let a = 2;
    return(
        <div className="hero">
            <h1>Hello World</h1>
            <p>{a+20}</p>
        </div>
    );
}

export default App;