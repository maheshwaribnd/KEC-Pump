import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  answerID: '',
};

const AnswerData = createSlice({
  name: 'answerData',
  initialState,
  reducers: {
    AnswerDataFunction(state, action) {
      return {
        answerID: action.payload.answerID,
      };
    },
  },
});

export const {AnswerDataFunction} = AnswerData.actions;
export default AnswerData.reducer;
