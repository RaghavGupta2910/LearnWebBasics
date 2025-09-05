import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import datas from "/Users/raghavgupta/Desktop/React/src/useState/datas.json";

const Data = () => {
    const [nData, setnData] = useState(datas);

    const remove = (eleId) => {
        setnData(nData.filter(ele => ele.id !== eleId));
    }

    const update = (eleId) => {
        setnData(nData.map(ele => {
            if(ele.id === eleId){
                return {...ele, data : "Updated Data"};}
            else{
                return ele;
            }
        }))
    }
    return(
        <div>
            <ul>
                {nData.map( ele => 
                    <li key={ele.id}>{ele.data}
                    <br/>
                    <button onClick={()=> remove(ele.id)}>Remove Data</button>
                    <button onClick={()=> update(ele.id)}>Update Data</button>
                    </li>
                )}
            </ul>
            <button onClick = {() => {setnData([])}}>Clear</button>
        </div>
    )
}

const App = () => {
    const [count, setCount] = useState(0);
    const Inc = () => {
        setCount(count + 1);
    }
    const Dec = () => {
        setCount(count - 1);
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
        <br/>
        <Data />
    </React.StrictMode>
)

