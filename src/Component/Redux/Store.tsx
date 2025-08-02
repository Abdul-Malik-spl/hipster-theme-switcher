import { configureStore} from "@reduxjs/toolkit";
import Myslice from './Slice'
const Storedata=configureStore({
    reducer:{
        data:Myslice
    }
})

export default Storedata