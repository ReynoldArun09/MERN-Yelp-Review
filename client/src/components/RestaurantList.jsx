import { RxUpdate } from "react-icons/rx"; 
import { AiFillDelete } from "react-icons/ai"; 
import axios from "axios";
import {  useEffect } from "react";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'
import { useDispatch, useSelector } from "react-redux";
import { deleteRest, getData } from "../redux/feature/RestSlice";


export default function RestaurantList() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {restData} = useSelector((state) => state.rest)
  
  const fetchData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL);
      dispatch(getData(response.data.data))
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async(e, id) => {
    e.stopPropagation()
    try {
      const response = await axios.delete(import.meta.env.VITE_BACKEND_URL+ `/delete/${id}`);
      if(response.data.message === 'Deleted!!') {
        dispatch(deleteRest(id))
      }
    } catch (error) {
      toast.error("Failed to delete!! try again later")
    }
  }

  const handleUpdate = async(e, id) => {
    e.stopPropagation()
    navigate(`/restaurant/${id}/update`)
  }

  return (
    <section className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="text-start">Name</th>
            <th scope="col" className="text-start">Location</th>
            <th scope="col">Ratings</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {restData?.map((rest, index) => (
            <tr key={index} onClick={() => navigate(`/restaurant/${rest._id}`)}>
              <td className="text-start text-capitalize">{rest.name}</td>
              <td className="text-start text-capitalize">{rest.location}</td>
              <td>{<Rating readonly={true} initialValue={rest.rating} />}</td>
              <td>
                <button className="btn btn-warning" onClick={(e) => handleUpdate(e, rest._id)}>Update <RxUpdate /> </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={(e) => handleDelete(e, rest._id)}>Delete <AiFillDelete /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
