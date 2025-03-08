import React from 'react';

function Contact() {
  return (
    <section style={{ textAlign: 'center' }}>  
      <br/>
      <h2>Contact Us</h2>
      <p><a href="tel:+94772018005">Telephone: 077 20 18 005</a></p>
      <p><a href="tel:+94756727739">Telephone: 075 67 27 739</a></p>
      <p><a href="tel:+94912245737">Telephone: 091 22 45 737</a></p>
      
      <div> 
        <br/>
        <h3>Follow Us:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <a href="https://www.facebook.com/p/New-Rathna-Traders-100082497764157/" target="_blank" rel="noopener noreferrer">
              <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" style={{ width: '20px', marginRight: '8px' }} />
              New Rathna Traders
            </a>
          </li> 
          <br/>
        </ul>
      </div>
      
      <div>
        <h3>Find Us Here : (Search) New Rathna Traders Galle</h3>  
        <br/>
        <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' /* Aspect Ratio 16:9 */ }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.558506027948!2d80.22097791564229!3d6.05351979561492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1755d8b6e45b9%3A0x0!2sNew%20Rathna%20Traders%20Galle!5e0!3m2!1sen!2slk!4v1612345678901!5m2!1sen!2slk"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            title="New Rathna Traders Galle Location"
          ></iframe>
        </div>
      </div> 
      <br/> 
      <br/>
    </section>
  );
}

export default Contact;
