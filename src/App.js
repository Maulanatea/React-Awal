import './App.css'
import ProductList from './components/ProductList';
import { useState } from 'react';
import { Products } from './data/Product'
import ProductCreate from './components/ProductCreate';

function App() {
  const [products, setProducts] = useState(Products)
  const onCreateProduct = (product) => {  //function ini akan menerima product
    console.log('ini product', product)
    setProducts([...products, {id: Math.round(Math.random() * 1000), ...product}])

  }
  const onDeleteProduct = (id) => {
    const deleteProduct = products.filter((prod)=>{
      return prod.id != id
    })
    setProducts(deleteProduct) 
  }
  return (
    <>
      <div className='app-title'>List Produk</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} />

    </>
  );
}

export default App