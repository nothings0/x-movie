import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
    name: "MenuSlice",
    initialState: {
        active: false
    },
    reducers: {
        set: (state, actions) => {
            state.active = actions.payload
        }
    }
})

export const { set } = MenuSlice.actions
export default MenuSlice.reducer