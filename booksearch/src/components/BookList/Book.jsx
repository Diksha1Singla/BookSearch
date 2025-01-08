import React from 'react'
import { Link } from 'react-router-dom'
import "./BookList.css"

const Book = (book) => {
    return(
        <div className="book-item flex flex-column flex-sb">
            <div className="book-item-img">
                <img src={book.cover_img} alt="" />
            </div>
            <div className="book-item text-center"> 
                <Link to = {`/book/${book.id}`} {...book}>
                    <div className="book-item-info title fw-7 fs-18">
                        <span>{book.title}</span>
                    </div>
                </Link>
                <div className="book-item-info author fw-7 fs-18">
                    <span className='text-capitalize fw-7'>Author: </span>
                    <span>{book.author?book.author.join(", "):book.author}</span>
                </div>
                
                <div className="book-item-info edition_count fw-7 fs-18">
                    <span className='text-capitalize fw-7'>Total Editions: </span>
                    <span>{book.edition_count}</span>
                </div>
                
                <div className="book-item-info publish-year fw-7 fs-18">
                    <span className='text-capitalize fw-7'>Publish Year: </span>
                    <span>{book.first_publish_year}</span>
                </div>
                
                {/* <div className="book-item-info author fw-7 fs-18">
                    <span className='text-capitalize fw-7'>Author:</span>
                    <span>{book.author}</span>
                </div> */}
            </div>
        </div>
    )
}

export default Book