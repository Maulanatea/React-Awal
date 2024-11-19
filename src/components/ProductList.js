import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = ({ products }) => {
  
  return (
    <>
      <div className='cards' >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            nama={product.nama}
            deskripsi={product.deskripsi}
            imageURL={product.imageURL}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList