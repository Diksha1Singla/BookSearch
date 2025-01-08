// https://openlibrary.org/works/OL45804W.json
// https://covers.openlibrary.org/b/id/240727-S.jpg 

import React, { useEffect, useState } from 'react'
import {useParams} from  'react-router-dom'
import Loading from "../Loader/Loader"
import coverImg from "../../images/cover_not_found.jpg"
import "./BookDetails.css"
import {FaArrowLeft} from "react-icons/fa"
import { useNavigate } from 'react-router-dom'





const url = "https://openlibrary.org/works/"

const BookDetails = () =>{
    const {id} = useParams();
    const [loading,setLoading] = useState(false)
    const [book, setBook] = useState(null);
    const navigate = useNavigate()

    useEffect(()=>{
        setLoading(true)
        async function getBookDetails(){
            try {
                const response = await fetch(`${url}${id}.json`);
                const data = await response.json();
                // console.log(data)

                if(data){
                    const newBook = {
                        description: data.description?data.description.value:"Description unavailable",
                        title: data.title,
                        cover_img: data.covers? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`:coverImg,
                        subject_places: data.subject_places?data.subject_places.join(", "):"Subject places unavailable",
                        subject_times: data.subject_times?data.subject_times.join(", "):"Subject times unavailable",
                        subjects:data.subjects?data.subjects.join(", "):"Subjects Unavailable"
                    }
                    setBook(newBook);
                }
                else{
                    setBook(null);
                }
                setLoading(false)
            } catch (error) {
                // console.log(error)
                setLoading(false)
            }
        }
        getBookDetails();
    },[id])
if(loading) return <Loading/>
    return(
        <section className="book-details">
            <div className="container">
                <button type='button' className="flex flex-c back-btn" onClick={()=>navigate("/book")}>
                    <FaArrowLeft size={30}>
                    </FaArrowLeft>
                    <span className="fs-17 fw-6">Go Back</span>
                </button>
            </div>
                <div className="book-details-item title">
                    <span className='fw-6 fs-10'>{book?.title}</span>
                </div>
            <div className="book-details-content grid">
                <div className="book-details-img">
                    <img src={book?.cover_img} alt="cover img" />
                </div>
            </div>
            <div className="book-details-content">
                
                <div className="book-details-item description">
                    <span className='fw-6 fs-10'>{book?.description}</span>
                </div>
                <div className="book-details-item">
                    <span className='fw-6'>Subject Places: </span>
                    <span className='text-italic'>{book?.subject_places}</span>
                </div>
                <div className="book-details-item">
                    <span className='fw-6'>Subject Times: </span>
                    <span className='text-italic'>{book?.subject_times}</span>
                </div>
                <div className="book-details-item">
                    <span className='fw-6'>Subjects: </span>
                    <span>{book?.subjects}</span>
                </div>
            </div>
            <button>
            <h3 style={{"marginLeft":"50vw"}}>For More<a href="https://openlibrary.org/">Details</a></h3>
            </button>
            {/* https://openlibrary.org/ */}
        </section>
    )
}

export default BookDetails