import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const Form = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type = "text" value = {name} onChange={handleName}/>
            </label>
            <br/>
            <label>
                Email:
                <input type = "email" value = {email} onChange={handleEmail}/>
            </label>
            <br/>
            <label>
                Password:
                <input type = "password" value = {password} onChange={handlePassword}/>
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
    <Form/>
    </React.StrictMode>
);