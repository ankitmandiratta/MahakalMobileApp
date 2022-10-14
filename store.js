import {createStore} from 'redux'
import reducer from './store/tabReducer' 


const store = createStore(reducer)

export default store