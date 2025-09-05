import React, {useState, useEffect} from 'react'

const MultipleReturn = () => {
    const [users, setUsers] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchusers(){
            try{
                const response = await fetch("https://api.github.com/users");
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            }catch(error){
                setError(error);
                setIsLoading(false);
            }
        }
        fetchusers();
    })

    if(isloading){
        return <h1>Loading....</h1>
    }
    if(error){
        return <h1>Error : {error.message}</h1>
    }

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {
                    users.map(user => (
                        <li key = {users.id}><a href = {user.html_url}>{user.login}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MultipleReturn
