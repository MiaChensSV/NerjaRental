import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "../Form/Form.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import fetchEvents from "../../util/http";
import { setCalendarEvent } from "../../store/calendarReducer";
import adjustEventEndDate from "../../util/AdjustEndDate";
import { useAppSelector } from "../../store";
import {
  addDays,
  isBefore,
  isSameDay,
  startOfDay,
  isWithinInterval,
} from "date-fns";
const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [totalAdults, setTotalAdults] = useState(1);
  const [totalChildren, setTotalChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission success
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [getDayClass, setGetDayClass] = useState(() => () => "");
  const [isDayBlocked, setIsDayBlocked] = useState(() => () => false);
  const bookedDateRanges = useAppSelector((state) => state.calendar.events);
  const dispatch = useDispatch();

  useEffect(() => {
    if (bookedDateRanges == null) {
      fetchEvents().then((result) => {
        console.log("Fetched events in Form: ", result);
        const adjustedEvents = result.map(adjustEventEndDate);
        console.log("Adjusted events in Form: ", adjustedEvents);
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
        if (ranges.length === 0) {
          return "";
        } // Not booked
        if (ranges.length === 2) {
          return "full-booked";
        }
        if (ranges.length === 1 && isSameDay(dateStart, ranges[0].start)) {
          return "start-booked";
        }
        if (ranges.length === 1 && isSameDay(dateStart, ranges[0].end)) {
          return "end-booked";
        }
        return "mid-booked"; // Somewhere in between
      };
      setIsDayBlocked(() => isDayBlockedFunc);
      setGetDayClass(() => getDayClassFunc);
    }
  }, [bookedDateRanges]);

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const handleTotalAdultsChange = (e) => {
    const value = parseInt(e.target.value);
    setTotalAdults(value);
    if (value + totalChildren <= 4) {
      setTotalAdults(value);
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        totalGroupSize: "",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        totalGroupSize: "Total group size must be less than 4",
      }))
    }
  };

  const handleTotalChildrenChange = (e) => {
    const value = parseInt(e.target.value);
    if (totalAdults + value <= 4) {
      setTotalChildren(value);
      setChildrenAges([]);
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        totalGroupSize: "",
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        totalGroupSize: "Total group size must be less than 4",
      }));
    }
  };

  const handleChildrenAgeChange = (childIndex, age) => {
    const newAges = [...childrenAges];
    newAges[childIndex] = age;
    setChildrenAges(newAges);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Validate email format
    if (!validateEmail(e.target.value)) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      // Clear email error if valid
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validateEmail = (email) => {
    // Regex for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = "Full Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Invalid email format";
    }
    if (!phone.trim()) {
      errors.phone = "Phone Number is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    // Set errors if any
    setFormErrors(errors);

    // Proceed with form submission if no errors
    if (Object.keys(errors).length === 0) {
      // Handle form submission logic here (e.g., send data to server)
      setIsSubmitted(true);
      setShowSuccessMessage(true);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top

      axios
        .post("/send-email", {
          fullName,
          email,
          phone,
          checkInDate,
          checkOutDate,
          totalAdults,
          totalChildren,
          childrenAges,
          message,
        })
        .then((response) => {
          console.log("Email sent successfully:", response);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <>
          <h1>Send a message to us!</h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="two-column">
              <div className="inputValue">
                <label htmlFor="full-name">Name:</label>
                <input
                  type="text"
                  id="full-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                {formErrors.fullName && (
                  <p className="error-message">{formErrors.fullName}</p>
                )}
              </div>
              <div className="inputValue">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                {formErrors.email && (
                  <p className="error-message">{formErrors.email}</p>
                )}
              </div>
            </div>
            <div className="phoneInput">
              <label htmlFor="phone">Phone:</label>
              <PhoneInput
                defaultCountry="se"
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
              {formErrors.phone && (
                <p className="error-message">{formErrors.phone}</p>
              )}
            </div>
            <div className="two-column">
              <div className="inputValue">
                <label htmlFor="check-in-date">Check-in:</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  minDate={today}
                  renderDayContents={(day, date) => {
                    const isToday = isSameDay(startOfDay(date), today);
                    const dayClass = getDayClass(date);
                    return (
                      <div className={`day ${isToday ? "today" : ""} ${dayClass}`}>
                        {day}
                      </div>
                    );
                  }}
                  filterDate={(date) => !isDayBlocked(date)}
                  // filterDate={(date) => !isDateUnavailable(date)}
                  placeholderText="Select a check-in date"
                  dateFormat="yyyy-MM-dd"
                  required
                />
              </div>
              <div className="inputValue">
                <label htmlFor="check-out-date">Check-out:</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  minDate={checkInDate || today}
                  filterDate={(date) => !isDayBlocked(date)}
                  placeholderText="Select a check-out date"
                  dateFormat="yyyy-MM-dd"
                  renderDayContents={(day, date) => {
                    const isToday = isSameDay(startOfDay(date), today);
                    const dayClass = getDayClass(date);
                    return (
                      <div className={`day ${isToday ? "today" : ""} ${dayClass}`}>
                        {day}
                      </div>
                    );
                  }}
                  required
                />
              </div>
            </div>
            <div className="two-column">
              <div className="inputValue">
                <label htmlFor="total-adults">Adults:</label>
                <input
                  type="number"
                  id="total-adults"
                  value={totalAdults}
                  onChange={handleTotalAdultsChange}
                  min="1"
                  max="4"
                  required
                />
              </div>
              <div className="inputValue">
                <label htmlFor="total-children">Children:</label>
                <input
                  type="number"
                  id="total-children"
                  value={totalChildren}
                  onChange={handleTotalChildrenChange}
                  min="0"
                  max="3"
                  required
                />
              </div>
            </div>
            <div className="children-age">
              {[...Array(totalChildren)].map((_, index) => (
                <div key={index} className="inputValue">
                  <label htmlFor={`child${index + 1}-age`}>{`Child ${
                    index + 1
                  }'s Age:`}</label>
                  <select
                    id={`child${index + 1}-age`}
                    value={childrenAges[index] || ""}
                    onChange={(e) =>
                      handleChildrenAgeChange(index, parseInt(e.target.value))
                    }
                    required={totalChildren > 0}
                  >
                    <option value="">Select Age</option>
                    {[...Array(18)].map((_, age) => (
                      <option key={age + 1} value={age + 1}>
                        {age + 1} year{age !== 0 ? "s" : ""} old
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            <div className="message">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              {formErrors.message && (
                <p className="error-message">{formErrors.message}</p>
              )}
            </div>
            <div className="button">
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        showSuccessMessage && (
          <div className="success-message">
            <p>Email sent successfully!</p>
            <p>We will get back to you as soon as possible.</p>
          </div>
        )
      )}
    </>
  );
};

export default ContactForm;
