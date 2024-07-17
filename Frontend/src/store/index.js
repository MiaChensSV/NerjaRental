import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./calendarReducer";
import {  useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
  },
});
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;