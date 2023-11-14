import React from 'react'
import { useState,useEffect} from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
       fetch('https://api.github.com/users/apurvanair')
       .then((response)=>response.json())
       .then(data=>{
        console.log(data)
        setData(data)
       })
    },[])

    return (
     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Name:{data.name}
     <img src={data.avatar_url} width='300' alt="Apurva" />
     </div>
  )
}

export default Github