import React, { useState } from 'react';
import './Products.css'; // Make sure to create this CSS file
import logo1 from '../assets/images/products/IMG_20250228_183437.jpg';
import logo2 from '../assets/images/products/IMG_20250228_183451.jpg';
import logo3 from '../assets/images/products/IMG_20250228_183505.jpg';
import logo4 from '../assets/images/products/IMG_20250228_183543.jpg';
import logo5 from '../assets/images/products/IMG_20250228_183614.jpg';
import logo6 from '../assets/images/products/IMG_20250228_183635.jpg';
import logo7 from '../assets/images/products/IMG_20250228_183653.jpg';
import logo8 from '../assets/images/products/IMG_20250228_183719.jpg';
import logo9 from '../assets/images/products/IMG_20250228_183749.jpg';
import logo10 from '../assets/images/products/IMG_20250228_183907.jpg';
import logo11 from '../assets/images/products/IMG_20250228_184027.jpg';
import logo12 from '../assets/images/products/IMG_20250228_184108.jpg';
import logo13 from '../assets/images/products/IMG_20250228_184223.jpg';
import logo14 from '../assets/images/products/IMG_20250228_184249.jpg';
import logo15 from '../assets/images/products/IMG_20250228_184256.jpg';
import logo16 from '../assets/images/products/IMG_20250228_184644.jpg';
import logo17 from '../assets/images/products/IMG_20250228_184836.jpg';
import logo18 from '../assets/images/products/IMG_20250228_184851.jpg';
import logo19 from '../assets/images/products/IMG_20250228_184923.jpg';
import logo20 from '../assets/images/products/IMG_20250228_184936.jpg';
import logo21 from '../assets/images/products/IMG_20250228_184957.jpg';
import logo22 from '../assets/images/products/IMG_20250228_185136.jpg';
import logo23 from '../assets/images/products/IMG_20250228_185155.jpg';
import logo24 from '../assets/images/products/IMG_20250228_185203.jpg';
import logo25 from '../assets/images/products/IMG_20250228_185208.jpg';
import logo26 from '../assets/images/products/IMG_20250228_185222.jpg';
import logo27 from '../assets/images/products/IMG_20250228_185236.jpg';
import logo28 from '../assets/images/products/IMG_20250228_185424.jpg';
import logo29 from '../assets/images/products/IMG_20250228_185447.jpg';
import logo30 from '../assets/images/products/IMG_20250228_185526.jpg';
import logo31 from '../assets/images/products/IMG_20250228_185539.jpg';
import logo32 from '../assets/images/products/IMG_20250228_185110.jpg';
import logo33 from '../assets/images/products/IMG_20250228_185603.jpg';
import logo34 from '../assets/images/products/IMG_20250228_185626.jpg';
import logo35 from '../assets/images/products/IMG_20250228_185654.jpg';
import logo36 from '../assets/images/products/IMG_20250228_185726.jpg';
import logo37 from '../assets/images/products/IMG_20250228_185826.jpg';




function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const products = [
    {
      category: 'Fertilizers',
      images: [
        
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo8,
        logo9,
        logo10,
        logo11,
        logo12, 

        // Add more image URLs here
      ],
      description: 'Discover our range of high-quality fertilizers to boost your crop yield.',
    },
    {
      category: 'Chemicals',
      images: [
        logo13,
        logo14,
        logo15,
        logo16,
        logo17,
        logo18,
        logo19,
        logo20,
        logo21,
        logo22,

        // Add more image URLs here
      ],
      description: 'Browse our selection of safe and effective agro chemicals.',
    },
    {
      category: 'Seeds',
      images: [
        logo23,
        logo24,
        logo25,
        logo26,
        logo27,
        logo28,
        logo29,
        logo30,
        logo31,

        // Add more image URLs here
      ],
      description: 'Choose from a variety of high-quality seeds for your farming needs.',
    },
    {
      category: 'Agri Equipments',
      images: [
        logo32,
        logo33,
        logo34,
        logo35,
        logo36,
        logo37,
        
        // Add more image URLs here
      ],
      description: 'Explore our range of agricultural equipment to make your farming easier.',
    },
  ];

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <input 
        type="text"
        placeholder="Search categories...."
        onChange={handleSearch}
        className="search-bar"
      />
      {filteredProducts.map((product, index) => (
        <div className="product-category" key={index}>
          <h3>{product.category}</h3>
          <p>{product.description}</p>
          {product.images.map((image, imgIndex) => (
            <img key={imgIndex} src={image} alt={`${product.category} ${imgIndex + 1}`} />
          ))}
        </div>
      ))}
    </section>
  );
}

export default Products;
