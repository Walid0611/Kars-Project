import {configureStore} from "@reduxjs/toolkit"
import authSlice from './authSlice'
import ListUserSlice from './ListUserSlice'
import KarsSlice from "./KarsSlice"

export default configureStore({

    reducer:{auth:authSlice ,
        KarsElement:KarsSlice,
    UserElement:ListUserSlice,
    
    }
    
})