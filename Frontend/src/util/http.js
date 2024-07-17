import axios from "axios";
const BASE_URL = process.env.REACT_APP_CALENDAR_URL + process.env.REACT_APP_CALENDAR_ID   + '/events'

// Function to fetch events from the Google Calendar
const fetchEvents = async () => {
  return new Promise((resolve) => {
    try {
      axios
        .get(BASE_URL, {
          params: {
            key: process.env.REACT_APP_API_KEY,
            timeMin: new Date().toISOString(),
            maxResults: 10,
            singleEvents: true,
            orderBy: "startTime",
          },
        })
        .then((response) => {
          if (response.data.items.length) {
            const eventArray = response.data.items.map((event) => ({
              startDate: event.start.dateTime || event.start.date,
              endDate: event.end.dateTime || event.end.date,
              summary: event.summary,
            }));
            resolve(eventArray);
          }else resolve([])
        });
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  });
};
export default fetchEvents;

// Fetch and display the events
