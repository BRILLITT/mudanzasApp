import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userRegisterSlice = createSlice({
		name: 'userRegisterSlice',
    initialState: [],
    reducers: {
        changeCredentials:(state,action)=>{
            const data = action.payload;

            return [...state,data] ;
        },
        
    }
})

export const { changeCredentials } = userRegisterSlice.actions;

export default userRegisterSlice.reducer;