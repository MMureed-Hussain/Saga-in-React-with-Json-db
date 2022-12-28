import React, { useEffect, useState } from 'react'

export default function Hooks() {

    const [resourcetype ,setResourceType ]= useState('posts')
    const [windowwidth, setwindowwidth]= useState(window.innerWidth)
    const [items , setItems]= useState([])
    useEffect(()=>{
        window.addEventListener('resize window',handleReSize)
        fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
        .then(response => response.json())
        .then(json=> setItems(json))
        return()=>{
            console.log("changing is here")
        }

    },[resourcetype])
    const handleReSize=()=>{
        setwindowwidth(window.innerWidth)
    }
  return (
    <>
      <div className='App'>
        <div>
            <button onClick={()=>setResourceType('Posts')}>Posts</button>
            <button onClick={()=>setResourceType('Users')}>Users</button>
            <button onClick={()=>setResourceType('Comments')}>Comments</button>

            </div>
            <h3>{windowwidth}</h3>
            <h1>{resourcetype}</h1>
            {items.map(item=> {
return <pre>{JSON.stringify(item)}</pre>
            })}
      </div>
    </>
  )
}
