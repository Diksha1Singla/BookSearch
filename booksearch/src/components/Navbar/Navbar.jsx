import React from 'react'
import { Link } from 'react-router-dom'
import "../Navbar/Navbar.css"
import logoImg from "../../images/logo.png"
// import {HiOutlineMenuAlt3} from  'react-icons/hi'
import { useAppContext } from '../../context'



const Navbar = () =>{

    // const [toggleMenu , setToggleMenu] = useState(false)
    // const handleNavbar = () => setToggleMenu(!toggleMenu)

    const {isLoggedIn} = useAppContext()

    return(
        <nav className='navar' id='navbar'>
            <div className="conatiner navbar-content flex">
                <div className="brand-and-toggler flex flex-sb">
                    <Link to="/" className='navbar-brand flex'>
                        <img src={logoImg} alt="" />
                        <span className='fw-6 fs-30 ls-1'>BookHub</span>
                    </Link>
                    
                    {/* <button type='button' className='navbar-toggle-btn' onClick={handleNavbar}>
                        <HiOutlineMenuAlt3 size={35} style={{
                            color: `${toggleMenu?"#fff":"010101"}`
                        }} />
                    </button> */}
                </div>             
                {/* <div className={toggleMenu?"navbar-collapse show-navbar-collapse" : "navbar-collapse"}> */}
                <div>
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <Link to="/" className="nav-link fs-12 fw-3 ls-1">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white fs-12 fw-3 ls-1">About</Link>
                        </li>
                        <li className='ms-auto' style={{"marginRight":"5rem"}}>
                            {isLoggedIn ? (
                                <li className="nav-item">
                                    <Link to="/logout" className="nav-link text-white fs-12 fw-3 ls-1">Logout</Link>
                                </li>
                            ) : (
                                <li className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link text-white fs-12 fw-3 ls-1">Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link text-white fs-12 fw-3 ls-1">Login</Link>
                                    </li>
                                </li>
                            )}
                        </li>
                    </ul>
                </div>
                
            </div>

        </nav>
    )
}

export default Navbar