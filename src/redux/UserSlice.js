import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        login: {
            user: null
        },
        register: {
            success: false
        }
    },
    reducers: {
        login: (state, actions) => {
            state.login.user = actions.payload
        },
        register: (state) => {
            state.register.success = true
        }
    }
})

export const { login, register } = UserSlice.actions
export default UserSlice.reducer