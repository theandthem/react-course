import { configureStore } from '@reduxjs/toolkit';
import extrasReducer from './ExtrasSlice';
import languageReducer from './LanguageSlice';

export default configureStore({
  reducer: {
    extras: extrasReducer,
    language: languageReducer,
  },
})