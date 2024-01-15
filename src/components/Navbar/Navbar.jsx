import './navbar.css'

import { Link } from "react-router-dom"



const Navbar = ()=>{
    return(
        <div className='nav-container'>

            <nav>
                <div className="logo">
                    <img src="https://imgs.search.brave.com/g6YpTlfUI7vTbcEE8KFdWK0CEjIPe1pipEw-ARdhM2A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NjU5MDQxMS92ZWN0/b3IvbS1sb2dvLWRl/c2lnbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9OFI5YWcy/TVNQZ2dGY2NBQ3JP/cU8zOVB1ZlVOMy1q/bkg4QVJUZ2ZaNlY5/Zz0" alt="logo" />
                </div>


                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>About US</li>
                    <li>Services</li>
                    <li>Contatct us</li>
                    
                </ul>

                <div className="auth">
                    <Link to="/login" className="k"> Login</Link>
                    
                    <Link to="/signup" className='s'>Register</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar