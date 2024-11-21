import React from 'react';
import ProductCard from '../components/ProductCard';

const ProductList = ({ products, onDeleteProduct }) => {
  
  return (
    <>
      <div className='cards' >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList