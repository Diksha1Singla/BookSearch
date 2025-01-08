import React from 'react'
import LoadImg from "../../images/loader.svg"
import "./Loader.css"
const Loader = () =>{
    return(
        <>
            <div className='LoaderImg'>
                <img src={LoadImg} alt="Loader" />
            </div>
        </>
    )
}

export default Loader