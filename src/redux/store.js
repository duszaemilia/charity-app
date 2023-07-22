import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        ...reducers,
        auth: authReducer,
    },
});
