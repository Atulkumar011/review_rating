import React from 'react'

const App =()=>{
    const [userData,setUserData] =useState([]);
    useEffect(()=> {
        fetch("https://jsanplaceholder.typicode.com/posts")
        .then((result) => result.json())
        .then ((result) =>{
            console.log(result);
            setUserData(result);
        })

    })
}
return(
    <div className="container mt-5">
        <h2>Employee Details</h2>
        <table className ="table table -stripe">
            <thead>
                <tr>
                    <th>UserId</th>
                    <th>Title</th>
                    </tr>
                    <tbody>
                
                    {(
                        userData && userData.map(({id,userId,title}))=>(
                            <tr>
                                <td key ={id}>{userId}</td>
                                    <td key={id}>{title}</td>
                                    </tr>
                        ))
                                }