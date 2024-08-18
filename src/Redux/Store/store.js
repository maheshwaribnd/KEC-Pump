import {configureStore} from '@reduxjs/toolkit';
import AnswerData from '../Reducers/Question3Data';
import APIData from '../Reducers/APIDataReducer';

const store = configureStore({
  reducer: {
    AnswerData,
    APIData,
  },
});

export default store;
