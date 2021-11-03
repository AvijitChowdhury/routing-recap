import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friends = (props) => {
    const {name,email,address,id}= props.friend;
    console.log(name);
    const friendsStyle={
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    const history =useHistory();
    const handleOnClick=(friendId)=>{
        const url=`/friend/${friendId}`;
        history.push(url);
    }
    return (
        <div style={friendsStyle}>
           
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small>Address: {address.street}</small></p>
            <p><Link to={`/friend/${id}`}><button>Show detail of {id}</button></Link></p>
            <button onClick={()=>handleOnClick(id)}>Click Me</button>
        </div>
    );
};

export default Friends;