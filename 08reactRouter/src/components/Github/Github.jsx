import React, { useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/PatilNinad18')
        .then(response=> response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    }, [])


    return (
        <div className='text-center m-4 bg-slate-600 text-white p-4 text-3xl '>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git Pic" />
        </div>
    )
}

export default Github
