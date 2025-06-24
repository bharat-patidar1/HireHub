import { createSlice }  from "@reduxjs/toolkit"


const filterSlice = createSlice({
    name : "filter",
    initialState : {
        filterLocation : "",
        filterSalary :  "",
        filterIndustry : ""
    },
    reducers : {
        //actions
        setFilterLocation : (state , action)=>{
            state.filterLocation = action.payload
        },
        setFilterSalary : (state , action)=>{
            state.filterSalary = action.payload
        },
        setFilterIndustry : (state , action)=>{
            state.filterIndustry= action.payload
        }
    }

})
export const {setFilterIndustry , setFilterSalary ,setFilterLocation} = filterSlice.actions
export default filterSlice.reducer