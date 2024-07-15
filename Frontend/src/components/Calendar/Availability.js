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

const Availability = ({ defaultMonthsShown = 1 }) => {
  const [monthsShown, setMonthsShown] = useState(defaultMonthsShown);

  const updateMonthsShown = () => {
    const months = getResponsiveMonthsShown();
    setMonthsShown(months);
  };
  useEffect(() => {
    updateMonthsShown();
    window.addEventListener("resize", updateMonthsShown);
    return () => {
      window.removeEventListener("resize", updateMonthsShown);
    };
  }, []);

  const today = startOfDay(new Date());
  const bookedDateRanges = [
    { start: "2024-07-04", end: "2024-07-11" },
    { start: "2024-07-11", end: "2024-07-17" },
    { start: "2024-07-19", end: "2024-07-27" },
  ].map((range) => ({
    start: startOfDay(new Date(range.start)),
    end: startOfDay(new Date(range.end)),
  }));

  const isDayBlocked = (date) => {
    const dateStart = startOfDay(date);
    return (
      isBefore(dateStart, today) ||
      bookedDateRanges.some((range) =>
        isWithinInterval(dateStart, { start: range.start, end: range.end })
      )
    );
  };

  const highlightWithRanges = bookedDateRanges
    .flatMap((range) => {
      const days = [];
      for (let d = range.start; d <= range.end; d = addDays(d, 1)) {
        days.push(d);
      }
      return days;
    })
    .map((date) => startOfDay(date));

  const getDayClass = (date) => {
    const dateStart = startOfDay(date);
    // find which ranges include current day?
    const ranges = bookedDateRanges.filter((range) =>
      isWithinInterval(dateStart, { start: range.start, end: range.end })
    );

    if (ranges.length === 0) return ""; // Not booked
    if (ranges.length === 2) return "full-booked";
    if (ranges.length === 1 && isSameDay(dateStart, ranges[0].start))
      return "start-booked";
    if (ranges.length === 1 && isSameDay(dateStart, ranges[0].end))
      return "end-booked";
    return "mid-booked"; // Somewhere in between
  };

  return (
    <div className="calendar-container">
      <ReactDatePicker
        inline
        monthsShown={monthsShown}
        highlightDates={[
          {
            "react-datepicker__day--highlighted-custom-1": highlightWithRanges,
          },
        ]}
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
