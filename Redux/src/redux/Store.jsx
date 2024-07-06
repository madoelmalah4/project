import { configureStore } from "@reduxjs/toolkit";
import counterreducer from './Slice'

export const store  = configureStore({
    reducer:{
        arr : counterreducer,
    }
}) 