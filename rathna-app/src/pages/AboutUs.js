import React from 'react';
import videoSrc from '../assets/images/0227.mp4';

function AboutUs() {
  return (
    <section style={{ textAlign: 'center' }}>
      <br/>
      <h2>Our Shop</h2>

      <br/> 
      <div>
        <video controls autoPlay style={{ width: '100%', maxWidth: '600px' }}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        <br/>
        <li>Selling fertilizers, vegetable seeds, agro chemicals & agriculture equipments.</li> 
        <li>Our shop caters to the needs of both small-scale and large-scale farmers, offering a wide range of agricultural supplies. Selling with responsibility.</li> 
      </ul>
      
      <br/>
    </section>
  );
}

export default AboutUs;
