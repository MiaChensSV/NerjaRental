import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: null,
};
export const calendarReducer = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setCalendarEvent: (state, action) => {
      state.events = action.payload;
    },
  },
});
export const { setCalendarEvent } = calendarReducer.actions

export default calendarReducer.reducer


