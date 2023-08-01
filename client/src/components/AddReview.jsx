import { useState } from "react"
import {toast} from 'react-toastify'
import axios from "axios"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function AddReview() {
  const [username, setUsername] = useState("")
  const [comment, setComment] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  const AddReview = async(e) => {
    e.preventDefault()
    try {
      if(username === '' || comment === '') {
        toast.error("Enter valid information!!")
        return
      }
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + `/review/${id}` ,{
        username,
        comment,
        
      });
      if(response.data) {
        toast.success("Review added")
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to add review!!")
    }
  }


  return (
    <section className="container mx-auto">
      <h1>Add Review</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleFormControlTextarea1">Add Your Review</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}

            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button className="mt-3 btn btn-primary" onClick={AddReview}>
          Add Review
        </button>
      </form>
    </section>
  );
}
