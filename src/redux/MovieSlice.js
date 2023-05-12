import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: "MovieSlice",
    initialState: {
        list: []
    },
    reducers: {
        add: (state, actions) => {
            const newItem = actions.payload
            const newList = state.list
            let check = false
            for (let item of newList) {
                if(item.data.id === newItem.data.id){
                    check = true
                }
            }
            if(check === false) {
                state.list = [...newList, newItem]
            }
        }
    }
})

export const { add } = MovieSlice.actions
export default MovieSlice.reducer