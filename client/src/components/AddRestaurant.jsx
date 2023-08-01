import { MdOutlineFastfood } from "react-icons/md"; 

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {useDispatch} from 'react-redux'
import { addData } from "../redux/feature/RestSlice";

export default function AddRestaurant() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("*");
  const dispatch = useDispatch()

  const addRestaurant = async (e) => {
    e.preventDefault();
    try {
      if(name === '' || location === '' || rating === '') {
        toast.error("Enter valid information!!")
        return
      }
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/create', {
        name: name,
        location: location,
        rating: rating,
      });
      if (response.data.Success) {
        dispatch(addData(response.data.data))
        setName("") 
        setLocation("") 
        setRating('*')
      } else {
        toast.error("Restaurant already added!!");
      }
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <section>
      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              aria-label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="location"
              aria-label="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col">
            <select
              className="form-select"
              aria-label="Ratings"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              
              <option value="1">*</option>
              <option value="2">**</option>
              <option value="3">***</option>
              <option value="4">****</option>
              <option value="5">*****</option>
            </select>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={addRestaurant}>
              <span><MdOutlineFastfood /></span> Add
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
