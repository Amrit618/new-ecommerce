import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {UserReducerState, User, LoginType, } from '../../types/user'

export const initialState: UserReducerState = {
    categoryList:[],
    userlist: [],
    currentUser: undefined
}
export const fetchAllUsers = createAsyncThunk(
    'fetchAllUsers' ,
    async (user: User) => {
        if (user.role === 'admin') {
            const response = await axios.get<User[]> ('https://api.escuelajs.co/api/v1/users')
            return response.data
        } else {
            return []
        }
    })

export const login = createAsyncThunk(
    'login',
    async(
        {email,password}: LoginType
    )=>{
        try {
        const response = await axios.post ('http://api.escuelajs.co/api/v1/auth/login',{
            email, 
            password
        })
        if (response.data.access_token) {
            const user = await axios.get('https: //api.escuelajs.co/api/v1/auth/profile', {
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`
                }
            })
            return user.data
        }
        return undefined
    } catch (error) {
        console.log(error)
        }
    }
)

export const loginByToken = createAsyncThunk(
    'loginByToken',
    async(token: string)=>{
        const user = await axios.get('https: //api.escuelajs.co/api/v1/auth/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return user.data
    }
)

const userSlice = createSlice({
    name: 'user reducer',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllUsers.fulfilled, (state,action) => {
            state.userlist = action.payload
        })
        .addCase(login.fulfilled, (state, action) => {
            state.currentUser= action.payload
        })
        .addCase(loginByToken.fulfilled, (state,action) =>{
            state.currentUser= action.payload
        })
        
    } 
})
export const userReducer = userSlice.reducer