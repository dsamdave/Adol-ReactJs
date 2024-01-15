import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Spinner from "../../components/alert/Spinner";


const LoginPage = ()=> { 
    
    const navigate = useNavigate()
       
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser ]= useState(null)
  const [loading, setLoading ] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    await fetch("https://atmospherenow.onrender.com/api/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password, }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setUser(result)
        setLoading(false)
    });
  };

  useEffect(()=>{ 

    if(user?.accessToken){
        navigate("/")
    }
  }, [user])

  return (
    <div className="form-container">

        <h2>Login Page </h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 mt-4" type="submit">
          Submit
        </button>
      </form>

      { loading && <Spinner />}
    </div>
  );


}

export default LoginPage