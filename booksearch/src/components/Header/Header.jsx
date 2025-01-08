import React from 'react'
// import Navbar from "../../components/Navbar/Navbar";
import SearchBar from  "../../components/SearchBar/SearchBar";
import "../Header/Header.css"
import bgpic from "../../images/library-img.jpg"

const Header = () =>{
    return(
        <div className="holder">
            <header className="header">
                <div className="header-content flex flex-c text-center text-white">
                    <img className='bgpicstyle' src={bgpic} alt="" />
                        <div className='textStyle'>
                            <h1 className="header-title text-capitalize">Welcome to our website</h1>
                            <br/>
                            <p className='header-text fs-18 fw-3'>
                                BOOKHUB Get Latest Books
                            </p>
                            <SearchBar/>
                        </div>
                </div>
            </header>
        </div>
    )
}

export default Header