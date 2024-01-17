import React , { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify'
import Spinner from '../../components/alert/Spinner'
import CardComp from '../../components/CardComp'

const ProductDetailsPage = () => {

  const { id } = useParams()

  const [loading, setLoading] = useState(false)
  const [product, setProduct]= useState(null)

  const fetchUsers = async()=>{
    setLoading(true)
    await fetch(`https://techtrove-tsly.onrender.com/api/product/${id}`)
      .then(response => response.json())
      .then(result => {
        setProduct(result?.product)
        toast.success("Product details")
        setLoading(false)
      })
  }

  useEffect(()=>{
    fetchUsers()
  }, [])

  return (
    <div>

      {product && <CardComp item={product}/> }
      

{loading && <Spinner/>}
    </div>
  )
}

export default ProductDetailsPage