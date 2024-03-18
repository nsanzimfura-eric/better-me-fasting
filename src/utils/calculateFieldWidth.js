function calculateFieldWidth(size) {
  if (size === 4) {
    return "33%";
  } else if (size === 6) {
    return "50%";
  } else if (size === 8) {
    return "66%";
  } else if (size === 12) {
    return "100%";
  }
}

export default calculateFieldWidth;
