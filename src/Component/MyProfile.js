import React, { useEffect, useState } from 'react'
import axios from 'axios'

function MyProfile() {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        axios.get('http://befit.digitaldarwin.in/myphio-user-management/v1/user/alldetails',
        {headers: {
            'username': 20
        }})
        .then(res=>{
            console.log(res.data[0]);
            setData(res.data[0]);

        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    return (
        <div style={{width:"60%"}} class="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="row">
    <div class="col">
        <img src="http://befit.digitaldarwin.in/images/277674569.jpg" width="100" height="100"/>
        </div><div class="col">
        <h6>Name: {data.username} </h6>
        <h6>Conatact No: {data.mobile}</h6>
        <h6>Email:{data.email}</h6>
        <h6>Age: {data.age}</h6>
        <h6>Gender:{data.gender}</h6>
        <h6>Height:{data.height}</h6>
        <h6>Weight: {data.user_weight}</h6></div></div>
            
        </div>
    )
}

export default MyProfile;
