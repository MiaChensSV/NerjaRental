
export const getResponsiveMonthsShown = () => {
  if (window.innerWidth <= 480) {
    return 1;
  } else if (window.innerWidth <= 1280 && window.innerWidth > 480) {
    return 2;
  } else {
    return 3;
  }
};

