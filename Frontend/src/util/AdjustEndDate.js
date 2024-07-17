const adjustEventEndDate = (event) => {
  const adjustedEndDate = new Date(event.endDate);
  adjustedEndDate.setDate(adjustedEndDate.getDate() - 1);
  return {
    ...event,
    endDate: adjustedEndDate.toISOString().split("T")[0],
  };
};

export default adjustEventEndDate;
