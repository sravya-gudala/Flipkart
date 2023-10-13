import React from 'react'
import './App.css';
import './css/Bootstrap.css';
import Search from './components/Search';
import Categories from './components/Categories';
import Sliders from './components/Sliders';

import Form from './components/Form';
import Offers1 from './components/Offers1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





export default function App() {
  return (
    <>
    <BrowserRouter>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Search/>}/>
          <Route path='/' element={<Categories/>}/>
          <Route path='/' element={<Sliders/>}/>
          <Route path='/' element={<Offers1/>}/>

          <Route path='/Form' element={<Form/>}/>
          <Route path='*' element={Error}/>

          </Routes>
        </div>
      </BrowserRouter>
    
   {/*<Search/>
     <Categories/> 
    <Sliders/>  
  <Offers1/>*/}

    <Form/>
    
    
    </>
  )
}
