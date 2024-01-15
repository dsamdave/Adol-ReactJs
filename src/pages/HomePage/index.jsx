import React, { useEffect, useState } from 'react'
import CardComp from '../../components/CardComp'
import Spinner from '../../components/alert/Spinner'
import { toast } from 'react-toastify'

const HomePage = () => {

    const [products, setProducts] = useState(null)
    const [loading, setLaoding ] = useState(false)

    const fetchUsers = async()=>{
      setLaoding(true)
      // await fetch('https://jsonplaceholder.typicode.com/users')
      await fetch('https://techtrove-tsly.onrender.com/api/all-products')
        .then(response => response.json())
        .then(result => {
          setProducts(result?.products)
          toast.success("Welcome back!")
          setLaoding(false)
        })
    }
  
  
    useEffect(()=>{
      fetchUsers()
    }, [])


  return (
    <div style={{display: "flex", padding: "20px" }}>


        <div style={{margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}}>

          {
            products && products.map((item, i)=> (
              <CardComp item={item} key={i}/>
            ))
          }
        </div>

        {loading && <Spinner />}

      </div> 
  )
}

export default HomePage