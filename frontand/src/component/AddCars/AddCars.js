import React,  {useState} from 'react'
import './AddCars.css'
import {useNavigate} from 'react-router-dom';
import {PostCars} from '../../api/AuthCars'



const AddCars = () => {

  const navigate=useNavigate()

  const [name,setName]=useState('')
  const [series,setSeries]=useState('')
  const [ categories,setCategories]=useState('')
  const [image,setImage]=useState('')
  const [model,setModel]=useState('')
  
  
  
 const handleAdd= async(value)=>{
  await  PostCars(value)
  navigate('/')
 }
  
  console.log("ija",AddCars)
  
  
  
  return (
    <div>
    
    <section className="get-in-touch">
      <h1 className="title">Add Cars</h1>
      <form className="contact-form row">
        <div className="form-field col-lg-6">
          <input
            id="name"
            className="input-text js-input"
            type="text"
            required=""
            value={name} onChange={(e)=>setName(e.target.value)}/>
          <label className="label" htmlFor="name"  >
            name
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="text"
            className="input-text js-input"
            type="text"
            required=""   value={series} onChange={(e)=>setSeries(e.target.value)}/>
          <label className="label" htmlFor="text">
            series
          </label>
        </div>
        <div className="form-field col-lg-6 ">
          <input
            id="company"
            className="input-text js-input"
            type="text"
            required=""  value={categories} onChange={(e)=>setCategories(e.target.value)} />
          <label className="label" htmlFor="company">
           categories
          </label>
        </div>

        <div className="form-field col-lg-6 ">
          <input
            id="email"
            className="input-text js-input"
            type="image" alt='my space'
            required=""   value={image} onChange={(e)=>setImage(e.target.value)}/>
          <label className="label" htmlFor="image">
            Image
          </label>
        </div>

        <div className="form-field col-lg-6 ">
          <input
            id="phone"
            className="input-text js-input"
            type="text"
            required=""   value={model} onChange={(e)=>setModel(e.target.value)}  />
        
            <label className="label" htmlFor="phone">
           model
          </label>
        </div>
        <div className="form-field col-lg-12">
          <input className="submit-btn" type="button" defaultValue="Add" 
          onClick={()=>handleAdd({name, series,categories,image,model})}/>
        </div>

<button>AddCars</button>
      </form>
    </section>
  
  </div>
  )
}

export default AddCars