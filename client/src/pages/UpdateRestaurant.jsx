import axios from 'axios'
import { useState } from 'react'
import {toast} from 'react-toastify'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function UpdateRestaurant() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [rating, setRating] = useState('*')
  const navigate = useNavigate()
  const {id} = useParams()
  
  

  const updateRestaurant = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.put(import.meta.env.VITE_BACKEND_URL+ `/edit/${id}` ,{
        name:name,
        location:location,
        rating:rating
      });
      if(response.data) {
        toast.success("Restaurant updated")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to update!!")
    }
  }

  return (
    <section className="container mx-auto">
      <h1>Update Restaurant</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Restaurant Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Location</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Restaurant Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect2">Price Range</label>
          <select
            className="form-control"
            id="exampleFormControlSelect2"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option>*</option>
            <option>**</option>
            <option>***</option>
            <option>****</option>
            <option>*****</option>
          </select>
        </div>
        <button className='mt-3 btn btn-primary' onClick={updateRestaurant}>Update</button>
      </form>
    </section>
  );
}
