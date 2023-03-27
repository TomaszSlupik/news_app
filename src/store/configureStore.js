import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './newSlice'

export default configureStore({
  reducer: {
    news: newsReducer
  }
});
