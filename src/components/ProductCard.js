import React from 'react'
import { useState } from 'react'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import BorderColorIcon from '@material-ui/icons/BorderColor';


const ProductCard = ({product, onDeleteProduct}) => {
  const { id, nama, deskripsi, imageURL } = product
  const [jumlahProduct, setJumlahProduct] = useState(0)
  const handleDelete = () => {
    onDeleteProduct(id)
  }
  return (
    <div className='card'>
      <div>
        <BorderColorIcon className='icon-edit'/>
        <DeleteForeverIcon onClick={handleDelete} className='icon-delete'/>
      </div>
      <img style={{ width: '100%', height: '200px', borderRadius: '10px 10px 0px 0px' }}
        src={imageURL}
        alt=""
      />

      <div className='container'>
        <h4><b>{nama}</b></h4>
        <p>{deskripsi}</p>
      </div>
      <div className={`card-keranjang ${jumlahProduct > 0 ? 'jumlah-product' : 'show-keranjang'} `}>
        {jumlahProduct > 0 ? (<>
          <button className='button' onClick={() => setJumlahProduct(jumlahProduct - 1)}>-</button>
          <p>{jumlahProduct}</p>
          <button className='button' onClick={() => setJumlahProduct(jumlahProduct + 1)}>+</button>
        </>) : (<div className='keranjang' onClick={() => setJumlahProduct(jumlahProduct + 1)}>+ Kerangjang</div>)}
      </div>
    </div>
  )
}

export default ProductCard