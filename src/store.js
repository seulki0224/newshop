import { configureStore, createSlice } from '@reduxjs/toolkit'

//유저
let user = createSlice({
  name : 'user',
  initialState: 'kim'
})

//재고
let stock = createSlice({
  name : 'stock',
  initialState: [10, 11, 12]
})

//과제
let reduxShoes = createSlice({
  name : 'reduxShoes',
  initialState: [
    {id : 1, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock: stock.reducer,
    reduxShoes: reduxShoes.reducer
  }
})