import React from 'react'
import {useEffect,useState} from "react";
import {useLoaderData} from "react-router-dom"
function Github() {
    const data=useLoaderData(); //optimized version for useEffect 
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/shashidhar078")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
export const githubFollowers=async () => {
    const response = await fetch("https://api.github.com/users/shashidhar078")
    return response.json();
}