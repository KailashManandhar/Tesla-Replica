import React from 'react'
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div >
        <h1>404 PAGE NOT FOUND</h1>
        <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  )
}

export default NotFound
