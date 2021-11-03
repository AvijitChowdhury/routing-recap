import React from 'react';
import Friends from '../Friends/Friends';
import { useState,useEffect } from 'react';

const Home = () => {
    const [friends,setFriends] =useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data));
    },[]);
    console.log(friends);
    return (
        <div>
            <h1>Friends length: {friends.length}</h1>
            {
                friends.map(friend=> <Friends friend={friend}></Friends>)
            }
        </div>
    );
};

export default Home;