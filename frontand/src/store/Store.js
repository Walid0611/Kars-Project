import {configureStore} from "@reduxjs/toolkit"
import authSlice from './authSlice'
import ListUserSlice from './ListUserSlice'

export default configureStore({

    reducer:{auth:authSlice ,
    UserElement:ListUserSlice
    }
    
})