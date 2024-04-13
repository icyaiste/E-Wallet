import { configureStore } from '@reduxjs/toolkit';
import AddNewCardReducer from '../reducers/AddNewCard';

const store = configureStore({
  reducer:
  {
    AddNewCard: AddNewCardReducer
  }
});

export default store
