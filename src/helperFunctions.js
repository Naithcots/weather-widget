const getWindLabel = (windDeg) => {
  let idx = 0;
  const windVariants = [
    "North",
    "North-East",
    "East",
    "South-East",
    "South",
    "South-West",
    "West",
    "North-West",
    "North",
  ];

  for (let deg = 0; deg <= 360; deg += 45) {
    if (windDeg <= deg) break;
    idx++;
  }
  return windVariants[idx];
};

export { getWindLabel };
