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
    const updatedProduct = products.filter((prod)=>{
      return prod.id != id
    })
    setProducts(updatedProduct) 
  }
  return (
    <>
      <div className='app-title'>List Produk</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} onDeleteProduct={onDeleteProduct}/>

    </>
  );
}

export default App