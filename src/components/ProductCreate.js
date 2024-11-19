import React from 'react'
import { useState } from 'react'
import Modal from '../Modal'
import AddFeatureIcon from '../AddFeatureIcon'


const ProductCreate = ({onCreateProduct}) => {
  const initialState = {
    id: 0,
    nama: '',
    deskripsi: '',
    imageURL: '',
  }
  const [formDAta, setFormData] = useState(initialState);
  const { nama, deskripsi, imageURL } = formDAta;
  // const [showForm, setShowForm] = useState(false)
  // const handleShow = () => {
  //     setShowForm(!showForm);
  // }
  // modal
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateProduct(formDAta);
    setFormData(initialState);
  }
  const handleChange = (e) => {
    setFormData({
      ...formDAta,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className='product-create' >
      <div className='toggle-add'>
        <button onClick={openModal} className='edit-input-submit add-toggle'> Create
          {/* {showForm ? 'Batal' : 'Add Produk'}jika showForm true maka tombol akan berubah menjadi Batal, ini adalah ternary expression */}
        </button>
      </div>
      <Modal show={showModal} onClose={closeModal} >
        {showModal && <form onSubmit={handleSubmit} className='form' >
          <div className='form-add-title' ><AddFeatureIcon />Add Produk</div>
          <div className='form-group' >
            <label className='form-label'>Nama Produk</label>
            <input type="text" className='add-input-text' name="nama" placeholder="Nama Produk" value={nama} onChange={handleChange} />
          </div>
          <div className='form-group'>
          <label className='form-label'>Deskripsi</label>
            <input type="text" className='add-input-text' name="deskripsi" placeholder="deskripsi" value={deskripsi} onChange={handleChange} />
          </div>
          <div className='form-group'>
            <label className='form-label'>URL Gambar</label>
            <input type="text" className='add-input-text' name="imageURL" placeholder="URL Gambar" value={imageURL} onChange={handleChange} />
          </div>
          <input type="submit" className='edit-input-submit' value={'Kirim'}/>
          <input type="reset" className='edit-input-cancel' onClick={closeModal} value={'Cancel'}/>
        </form>}
      </Modal>
    </div>
  )
}



export default ProductCreate