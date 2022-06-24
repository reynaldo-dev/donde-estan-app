import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'

import desaparecidos from '../redux/slice/desaparecido.slice'

export const store = configureStore({
    reducer: {
        desaparecidos
    }
});