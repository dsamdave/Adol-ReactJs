


import { useEffect, useState } from "react"
import CardComp from "./components/CardComp"
import Footer from "./components/Footer/Footer"
import HeroComp from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"



const App = () => {

  const [products, setProducts] = useState(null)


  const fetchUsers = async()=>{
    // await fetch('https://jsonplaceholder.typicode.com/users')
    await fetch('https://techtrove-tsly.onrender.com/api/all-products')
      .then(response => response.json())
      .then(result => setProducts(result?.products))
  }


  useEffect(()=>{
    fetchUsers()
  }, [])

console.log({products})


  return (
    <>
        <Navbar />
      <div style={{display: "flex", padding: "20px" }}>


        <div style={{margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px"}}>

          {
            products && products.map((item, i)=> (
              <CardComp item={item}/>
            ))
          }
        </div>

      </div>
    </>
  )
}

export default App