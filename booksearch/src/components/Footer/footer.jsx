import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css'; 
import { faFacebookF, faXTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">BookHub</div>

      <div className="social-icons">
        <a href="/https://www.instagram.com/foldedpagesdistillery/?utm_source=ig_embed&ig_rid=2bd9b1b9-64e6-4345-bb12-9326d00471db"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="/https://x.com/bookslovereade1"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="/https://www.instagram.com/booksmakemewhole/?hl=en"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="/https://openlibrary.org/"><FontAwesomeIcon icon={faPinterestP} /></a>
        {/* <a href="#"><FontAwesomeIcon icon={faTiktok} /></a> */}
      </div>

      <hr />

      <div className="footer-content">
        <div className="footer-column">
          <h4>Company</h4>
          <a href="/about">About</a>
          <a href="/register">Register</a>
          <a href="/login">Login</a>
          <a href="/location">Check Location</a>
          {/* <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a> */}
          <a href="/about">Contact</a>
        </div>
        <div className="footer-column">
          <h4>Readers</h4>
          <a href="/about">What Is BookBub?</a>
          <a href="/https://openlibrary.org/">Ebook Deals</a>
          <a href="/https://openlibrary.org/">Free Ebooks</a>
          <a href="/https://openlibrary.org/">Free Kindle Books</a>
          <a href="/https://www.youtube.com/watch?v=BZq2rHnfgAM">The BookBub Blog</a>
          <a href="/https://openlibrary.org/">Help</a>
          {/* <a href="#">All Authors</a>
          <a href="#">All Books</a> */}
        </div>
        <div className="footer-column">
          <h4>Popular Blog Posts</h4>
          <a href="/https://openlibrary.org/">11 Great Places to Read Free Books Online Right Now</a>
          <a href="/https://openlibrary.org/">61 Books Everyone Should Read in Their Lifetime</a>
          <a href="/https://openlibrary.org/">How Does Kindle Work? Everything You Need to Know</a>
          <a href="/https://openlibrary.org/">43 of the Best Romance Books</a>
          <a href="/https://openlibrary.org/">28 of the Best Books Coming Out in 2024</a>
          <a href="/https://openlibrary.org/">The Best Historical Fiction Books: An Ultimate List</a>
        </div>
      </div>

      <div className="copyright">
        © 2024 BookHub. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
