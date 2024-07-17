import "../Calendar/Availability.css";
import React, { useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  addDays,
  isBefore,
  isSameDay,
  startOfDay,
  isWithinInterval,
} from "date-fns";
import { getResponsiveMonthsShown } from "../ResponsiveMonths";
import { useDispatch } from "react-redux";
import fetchEvents from "../../util/http";
import { setCalendarEvent } from "../../store/calendarReducer";
import { useAppSelector } from "../../store";
import adjustEventEndDate from "../../util/AdjustEndDate";

const Availability = ({ defaultMonthsShown = 1 }) => {
  const [monthsShown, setMonthsShown] = useState(defaultMonthsShown);
  const [highlightWithRanges, setHighlightWithRanges] = useState([]);
  const [getDayClass, setGetDayClass] = useState(() => () => "");
  const [isDayBlocked, setIsDayBlocked] = useState(() => () => false);
  const bookedDateRanges = useAppSelector((state) => state.calendar.events);

  const updateMonthsShown = () => {
    const months = getResponsiveMonthsShown();
    setMonthsShown(months);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (bookedDateRanges == null) {
      fetchEvents().then((result) => {
        const adjustedEvents = result.map(adjustEventEndDate);
        dispatch(setCalendarEvent(adjustedEvents));
      });
    } else {
      const eventRanges = bookedDateRanges.map((range) => ({
        start: startOfDay(new Date(range.startDate)),
        end: startOfDay(new Date(range.endDate)),
      }));
      const isDayBlockedFunc = (date) => {
        const dateStart = startOfDay(date);
        const today = startOfDay(new Date());
        return (
          isBefore(dateStart, today) ||
          eventRanges.some((range) =>
            isWithinInterval(dateStart, { start: range.start, end: range.end })
          )
        );
      };
      const highlightWithRangesFunc = eventRanges
        .flatMap((range) => {
          const days = [];
          for (let d = range.start; d <= range.end; d = addDays(d, 1)) {
            days.push(d);
          }
          return days;
        })
        .map((date) => startOfDay(date));
      const getDayClassFunc = (date) => {
        const dateStart = startOfDay(date);
        const today = startOfDay(new Date());
        // find which ranges include current day?
        const ranges = eventRanges.filter((range) =>
          isWithinInterval(dateStart, { start: range.start, end: range.end })
        );
        if (ranges.length === 0){ return "";}  // Not booked
        if (ranges.length === 2) {return "full-booked";}
        if (ranges.length === 1 && isSameDay(dateStart, ranges[0].start)){ return "start-booked"}
        if (ranges.length === 1 && isSameDay(dateStart, ranges[0].end)){  return "end-booked";}
        return "mid-booked"; // Somewhere in between
      };
      setHighlightWithRanges(highlightWithRangesFunc);
      setIsDayBlocked(() => isDayBlockedFunc);
      setGetDayClass(() => getDayClassFunc);
    }
  }, [bookedDateRanges]);

  useEffect(() => {
    updateMonthsShown();
    window.addEventListener("resize", updateMonthsShown);
    return () => {
      window.removeEventListener("resize", updateMonthsShown);
    };
  }, []);

  const today = startOfDay(new Date());

  return (
    <div className="calendar-container">
      <ReactDatePicker
        inline
        monthsShown={monthsShown}
        disabledKeyboardNavigation
        filterDate={(date) => !isDayBlocked(date)}
        minDate={new Date()}
        renderDayContents={(day, date) => {
          const isToday = isSameDay(startOfDay(date), today);
          const dayClass = getDayClass(date);
          return (
            <div className={`day ${isToday ? "today" : ""} ${dayClass}`}>
              {day}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Availability;
