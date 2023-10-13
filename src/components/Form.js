import React, { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'

export default function Form(){

  const[id,setId] =useState('')
  const[title,setTitle] =useState('')
  const[brand,setBrand] =useState('')
  const[price,setPrice] =useState('')
  const[des,setDes] =useState('')
  const[img,setImg] =useState('')

  const productData = {
    productId : id,
    title : title,
    brand : brand,
    price : price,
    description : des,
    thumbnail : img
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post(' http://localhost:3002/products ', productData)
    .then((res)=>{
      alert("Success")
      fetchData();
      setId('')
      setTitle('')
      setBrand('')
      setPrice('')
      setDes('')
      setImg('')
    })
  }

  
  const [ProductsList,setProductsList] = useState([{}])

  const fetchData=(()=>{
    axios.get(' http://localhost:3002/products ')
    .then(res => setProductsList(res.data))
  })

  {/*useEffect(()=>{
    axios.get(' http://localhost:3002/products ')
    .then(res => setProductsList(res.data))
  })*/}

  const handleEdit = (editData)=>{
    setId(editData.productId)
    setTitle(editData.title)
    setBrand(editData.brand)
    setPrice(editData.price)
    setDes(editData.description)
    setImg(editData.thumbnail)
  }

  const handleDelete = (id) =>{
    axios.delete(` http://localhost:3002/products/${id} `)
    .then((res) =>{
      alert('Product Deleted')
      fetchData()
    })
  }

  let sno=1;

  useEffect(()=>{
    fetchData()
  },0)

  return (
    <>
    <table className='table table-hover table-striped table-bordered'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Product Id</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Description</th>
          <th>Thumbnail</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {
          ProductsList.map((e,i)=>{
            return(
              <>
              <tr>
                <td>{sno++}</td>
                <td>{e.productId}</td>
                <td>{e.title}</td>
                <td>{e.brand}</td>
                <td>{e.price}</td>
                <td>{e.description}</td>
                <td><img src={e.thumbnail}/></td>
                <td>
                  <button className='btn btn-primary' onClick={()=>handleEdit(e)}><i class="fa-regular fa-pen-to-square"></i></button>
                  <button className='btn btn-danger'  onClick={()=>handleDelete(e.id)}>
                    <i class="fa-regular fa-trash-can"></i>
                  </button>
                </td>
              </tr>
              </>
            )
          })
        }
      </tbody>
    </table>

    <div className='row justify-content-center'>
      <div className='col-md-6 img-thumbnail'>
        <form method='post' onSubmit={handleSubmit}>
          <h1 className='text-center text-info'>Add Product</h1>
          <hr/>
          
          <div className='mb-3'>
            <label>Product ID</label>
            <input type='text' className='form-control' value={id} placeholder='Enter Product ID'
            onChange={ (e)=>{ setId(e.target.value) } }/>
          </div>

          <div className='mb-3'>
            <label>Product</label>
            <input type='text' className='form-control' value={title} placeholder='Enter Product name'
            onChange={ (e)=>{ setTitle(e.target.value) } }/>
          </div>

          <div className='mb-3'>
            <label>Brand</label>
            <input type='text' className='form-control' value={brand} placeholder='Enter Brand'
            onChange={ (e)=>{ setBrand(e.target.value) } }/>
          </div>

          <div className='mb-3'>
            <label>Price</label>
            <input type='text' className='form-control' value={price} placeholder='Enter Price'
            onChange={ (e)=>{ setPrice(e.target.value) } }/>
          </div>

          <div className='mb-3'>
            <label>Description</label>
            <textarea type='text' className='form-control' value={des} rows={3}
            onChange={ (e)=>{ setDes(e.target.value) } }/>
          </div> 

          <div className='mb-3'>
            <label>Image</label>
            <input type='url' className='form-control' value={img} placeholder='Enter url'
            onChange={ (e)=>{ setImg(e.target.value) } }/>
          </div> 

          <button class="btn btn-success float-end">Submit</button>

        </form>
      </div>
    </div>    
    </>
  )
}
