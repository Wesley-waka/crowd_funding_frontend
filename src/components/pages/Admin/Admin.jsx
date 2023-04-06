import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import styled from "styled-components";
import Error from "../../common/Error/Error";
import "./Admin.css"
import { useNavigate } from "react-router-dom";

export default function Admin(){
// used styled components to avoid merge conflicts


// function handleDeleteItem(deletedItem) {
//   const updatedItems = campaigns.filter((campaign) => campaign.id !== deletedItem.id);
//   setCampaigns(updatedItems);
// }

// useEffect(()=>{
//      },[id])

const navigate=useNavigate()

const initialState = {
  title:"",
  description:"",
  category: "",
  current_amount:"",
  goal_amount:"",
  image_url:"",
  start_date:"",
  end_date:""
} 
const [formData, setFormData] = useState(initialState)
const [errors, setErrors] = useState([])
const [campaignId, setCampaignId] = useState(1)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [current_amount, setCurrentAmount] = useState("")
    const [goal_amount, setGoal_amount]=useState("")
    const [image_url, setImage_url]=useState("")
    const [start_date, setStart_date]=useState("")
    const [end_date, setEnd_date]=useState("")

function handleChange(e){
  setFormData({...formData, [e.target.name]: e.target.value})
}

function handleSubmit(e){
    e.preventDefault();
    fetch("/campaigns",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    )
    .then(r=>{
      if (r.ok) {
        Swal.fire({
          title: 'Success',
          text: 'Added successfully',
          icon: 'success',
          confirmButtonText: 'Exit',
          confirmButtonColor:"green"
        })
      }
      else {
        r.json().then(err=>setErrors(err.errors))
      }
    }) 
}

function handleFetchSubmit(e){
  e.preventDefault()
  fetch(`/campaigns/${campaignId}`)
  .then((r)=>r.json())
  .then((campaign)=>{
    console.log(campaign)
      
      setTitle(campaign.title)
      setDescription(campaign.description)
      setCategory(campaign.category)
      setCurrentAmount(campaign.current_amount)
      setGoal_amount(campaign.goal_amount)
      setImage_url(campaign.image_url)
      setStart_date(campaign.start_date)
      setEnd_date(campaign.end_date)
  })


}
function handleUpdateSubmit(e)
{
 e.preventDefault()     
 fetch(`/campaigns/${campaignId}`,{
    method:"PATCH",
    headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
},
    body:JSON.stringify({
        title: title,
        description: description,
        category: category,
        current_amount: current_amount,
        goal_amount: goal_amount,
        image_url: image_url,
        start_date: start_date,
        end_date:end_date
    })
 })
    .then((r)=>r.json())
    .then(campaign=>{
      navigate("/campaigns/"+campaign.id)
    })       
    Swal.fire({
        title: 'Success',
        text: 'Updated Successfully',
        icon: 'success',
        confirmButtonText: 'Exit',
        confirmButtonColor:"green"
      })    
    }
    function handleClick() {

      fetch(`/campaigns/${campaignId}`, {
          method: "DELETE",
      })
      .then(r => {
        if (r.ok) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Campaign Deleted',
            showConfirmButton: false
            
          })
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Server Error!",
          })
        }
      }
    )

    
         
  }



  return (
    <>
     <div className="admin-form">
        <div className="form-div">
            <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Title</label>
            <input type="text"  name="title" onChange={handleChange} placeholder="New Title" value={formData.title}/> 

            <label htmlFor="fname">Description</label>
            <input type="text"  name="description" placeholder="Story..." value={formData.description} onChange={handleChange}/> 

            <label htmlFor="fname">Category</label>
            <select onChange={handleChange} name="category" value={formData.Category}>
            <option value="Environment">Environment</option>
            <option value="Animals">Animals</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
            <option value="Artists">Artists</option>
            <option value="Business">Business</option>
            </select>
            
            {/* <input type="text"  name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>  */}

            <label htmlFor="fname">Current Amount</label>
            <input type="number"  name="current_amount" placeholder="Current Amount" value={formData.current_amount} onChange={handleChange}/> 

            <label htmlFor="fname">Goal Amount</label>
            <input type="number" name="goal_amount" placeholder="Price" value={formData.goal_amount} onChange={handleChange}/>    

            <label htmlFor="fname">Image URL</label>
            <input type="url"  name="image_url" placeholder="Image URL" value={formData.image_url} onChange={handleChange}/> 

            <label htmlFor="fname">Start Date</label>
            <input type="date"  name="start_date" placeholder="" value={formData.start_date} onChange={handleChange}/> 

            <label htmlFor="fname">End Date</label>
            <input type="date"  name="end_date" placeholder="01/01/2023" value={formData.end_date} onChange={handleChange}/> 
            
            {errors.map((element, index)=><Error key={index}>{element}</Error>)}
            <input type="submit"  value="Add New Campaign"/>
            </form>
        </div>

        <div className="form-div">
        <h3>Fetch</h3>
        <form onSubmit={handleFetchSubmit}> 
        <label htmlFor="fname">Fetch Campaign using id</label>
        <input type="number" onChange={(e)=>setCampaignId(e.target.value)} />
        <input type="submit" value="Fetch"/>  
        </form>
      <form  onSubmit={handleUpdateSubmit}>
      <label htmlFor="fname">Title</label>
        <input type="text" className="form-control" value={title || ''} onChange={function(e){setTitle(e.target.value)}} placeholder="Title" />
        <label htmlFor="fname">Description</label>
        <input type="text" className="form-control" value={description || ''} onChange={(e)=> setDescription(e.target.value)} placeholder="Description" />
        <label htmlFor="fname">Category</label>
          <select type="text" className="form-select form-select-m" id="Select1" value={category || ''} onChange={(e)=> setCategory(e.target.value)} placeholder="Category">                
            <option>Global Warming/Environment</option>
            <option>Animals</option>
            <option>Education</option>
            <option>Health</option>
            <option>Musicians/Artists</option>
            <option>Small Business</option>
          </select>
          <label htmlFor="fname">Current Amount</label>
            <input type="number" value={current_amount || ''} onChange={(e)=> setCurrentAmount(e.target.value)} placeholder="Current Amount" />
            <label htmlFor="fname">Goal Amount</label>
            <input type="number" value={goal_amount || ''} onChange={(e)=> setGoal_amount(e.target.value)} placeholder="Goal Amount" />
            <label htmlFor="fname">Image URL</label>
            <input type="url" value={image_url || ''} onChange={(e)=> setImage_url(e.target.value)} placeholder="Image" />
            <label htmlFor="fname">Start date</label>
            <input type="date" value={start_date || ''} onChange={(e)=> setStart_date(e.target.value)} placeholder="Start Date" />
            <label htmlFor="fname">End date</label>
            <input type="date" value={end_date || ''} onChange={(e)=> setEnd_date(e.target.value)} placeholder="End Date" />
            <input type="submit" value="Update campaign"/>       
          </form>
          <button className="button" onClick={()=>handleClick(campaignId)} >Delete</button>
        </div>
        </div>
    </>
  );
};
