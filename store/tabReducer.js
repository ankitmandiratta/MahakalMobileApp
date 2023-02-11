import { SET_SELECTED_TAB } from "./tabActions"
//we are changing this value so everywher the value of this will work
const initialState={
selectedTab :"All"

}


const reducer = (state= initialState,action)=>{

    switch(action.type){
        case SET_SELECTED_TAB:
            return{
                ...state,
                selectedTab:action.payload.selectedTab
            }
            default: 
             return state
    }
}

export default reducer