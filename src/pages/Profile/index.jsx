import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AddProductForm from './AddProductForm'

const ProfilePage = () => {
    const accessToken = sessionStorage.getItem("accessToken")
    const userDetails = JSON.parse(localStorage.getItem("user"))

    const navigate = useNavigate()

    useEffect(()=>{
        if(accessToken == null){
            navigate("/login")
        }
    }, [])




  return (
    <div>
        <h4> Welcome {userDetails.username}</h4>

        <h6>{userDetails.email}</h6>

        <AddProductForm/>
    </div>
  )
}

export default ProfilePage