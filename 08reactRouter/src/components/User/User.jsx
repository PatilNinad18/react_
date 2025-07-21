import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
    return (
        <div className='bg-gray-300 px-3 m-2'>User : {userid}</div>
    )
}

export default User
