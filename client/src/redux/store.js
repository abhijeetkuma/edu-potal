import { configureStore } from '@reduxjs/toolkit'

import manageModelReducer from './manageModelSlice'

export default configureStore({
    reducer: {
        manageModel: manageModelReducer,
    },
})