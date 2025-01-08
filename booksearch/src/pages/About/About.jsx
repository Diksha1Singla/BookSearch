import React from 'react'
import "./About.css"
import pic from "../../images/aboutBg.png"

const About = () =>{
    return(
        <div className='aboutStyle'>
            <div>
                <img src={pic} alt="" />
            </div>
            <div className='AboutBody'>
                <h1>About Us</h1>
                <p>BookHub is a free service that helps millions of readers discover books they'll love while providing publishers and authors. BookBub is a book discovery service, that was created to help readers find new books and authors.
                    The company features book recommendations updates from authors and articles about books.
                    The service is free for readers
                </p> 

                <h2>Some Famous Books</h2>
                <p><a href='/'>Here</a> are some famous books that you might like</p>

                <h3>Connect With Us</h3>
                <p>You can find us on <a href="/facebook">Facebook</a>, <a href="/instagram">Instagram</a>, <a href="/telegram">Telegram</a>, <a href="/linkedIn">LinkedIn</a>, or just <a href="/contact">contact us</a> directly </p>
                
            </div>
        </div>
    )
}

export default About