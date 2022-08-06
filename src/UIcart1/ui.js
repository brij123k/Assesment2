import React from 'react'
import { useState} from "react";
import '../UIcart1/ui.css'
const axios = require("axios");

const Info = (props) => {
    return (
        <div classname='page'>
            <p>{props.login}</p>
            <img src={props.avatar_url} alt="" classname="img-ui"></img>
            <p>{props.name}</p>
            <p>{props.public_resp}</p>
            <p>{props.public_gists}</p>
            <p>{props.date}</p>
        </div>
      )
}
 
const Ui = (props) => { 
    const [username, setUsername] = useState();
    const [value,setValue]=useState({
        login:"",
        name:"",
        public_resp:"",
        public_gists:"",
        data:"",
        avatar_url:""
    });

    const fetchUserData = async () => {


        let res = await axios.get(`https://api.github.com/users/${username}`);
        // setLogin(data.login);

        console.log(res.data);
        setValue({
            login: res.data.login,
            name:res.data.name,
            public_resp:res.data.public_repos,
            public_gists:res.data.public_gists,
            data:res.data.created_at,
            avatar_url:res.data.avatar_url
        })
    }
    return (

        <div className='row'>
            <div classname="container">
            <input type="text" onChange={(e)=>{ setUsername(e.target.value)}} value={username}/>
            <button onClick={fetchUserData}>FETCH</button>
            <Info className="row1" avatar_url={value.avatar_url}
                login={value.login}
                name={value.name}
                public_gists={value.public_gists}
                date={value.data}
                public_resp={value.public_resp}
            ></Info>
</div>
        </div>
    );

}

export default Ui