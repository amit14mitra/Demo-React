import React,{useEffect,useState} from 'react'
import axios from 'axios'

function DataFetch() {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            console.log(res)
            setUsers(res.data)
        }).catch(err=>{
            console.log('error found')
        })
    },[])

    const FetchData=()=>{
        console.log(users)
    }

    return (
        <div>
            <ol>
                {
                    users.map(user=><li key={user.id}>{user.name} | {user.email} | {user.phone}</li>)
                    /*
                    In that case we can also use useContext in functional component like
                    const user = useContext(UserContext)
                    const subscribe = useContext(SubscribeContext)
                    */ 
                }
            </ol>
            <button onClick={FetchData}>Fetch User Data</button>
        </div>
    )
}

export default DataFetch
