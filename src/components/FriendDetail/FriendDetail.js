import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const FriendDetail = () => {
    const {friendId}=useParams();
    const [friend,setFriend] =useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[]);

    
    return (
        <div>
            <h2>
               <p>This is friend detail component.{friendId}</p> 
               <h3>Name: {friend.name}</h3>
               <p>Website: {friend.website}</p>
               <p>Phone: {friend.phone}</p>
            </h2>
            
        </div>
    );
};

export default FriendDetail;