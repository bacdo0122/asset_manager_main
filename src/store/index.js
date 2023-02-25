import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducer/auth'
import darkModeReducer from '../reducer/darkMode'
import notificationReducer from '../reducer/notification'
import userReducer from '../reducer/user'
import assetReducer from '../reducer/asset'
import pendingReducer from '../reducer/pending'
import consumableReducer from '../reducer/consumable'
export default configureStore({
  reducer: {
    auth: authReducer,
    darkMode: darkModeReducer,
    notification: notificationReducer,
    user:userReducer,
    asset: assetReducer,
    pending: pendingReducer,
    consumable:consumableReducer
  },
})