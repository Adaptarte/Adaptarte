const minuteToHour = (minute: number): number => {
  return minute / 60;
};

const hourToMinute = (hour: number): number => {
  return hour * 60;
};

const setHourToTimeRequired = (hour: number): string => {
  const time = new Date();
  time.setHours(Math.floor(hour), hourToMinute(hour % 1));

  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
  });
};

export { minuteToHour, hourToMinute, setHourToTimeRequired };
