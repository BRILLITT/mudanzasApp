import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const dataSlice = createSlice({
		name: 'dataSlice',
    initialState: {},
    reducers: {
        changeInfo:(state,action)=>{
            const data = action.payload;
            return data;
        },logout:(state) => {        
            return {};
        }

    }
})

export const { changeInfo, logout } = dataSlice.actions;

export default dataSlice.reducer;