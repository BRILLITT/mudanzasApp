import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './slices/data.slice'
import userRegisterSlice from './slices/userRegister.slice'



export default configureStore({
  reducer: {
    dataSlice: dataSlice,
    userRegisterSlice: userRegisterSlice,
	}
})