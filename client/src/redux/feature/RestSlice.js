import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
    restData: []
}

export const RestSlice = createSlice({
  name: 'rest',
  initialState,
  reducers: {
    getData:(state, {payload}) => {
        state.restData = payload
    },
    deleteRest:(state, {payload}) => {
        state.restData = state.restData.filter((item) => item._id !== payload)
        toast.success("Restuarant Deleted!!")
    },
    addData:(state, {payload}) => {
        state.restData.push(payload)
        toast.success("Restuarant added!!")
    }
    
  },
})

export const {getData, deleteRest, addData } = RestSlice.actions

export default RestSlice.reducer