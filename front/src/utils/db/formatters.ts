// Minute to hour and hour to minute
const minuteToHour = (minute: number): number => {
  return minute / 60;
};

const hourToMinute = (hour: number): number => {
  return hour * 60;
};

const decimalToMinute = (decimal: number): number => {
  return (decimal * 60) / 100;
};

const setHourToTimeRequired = (hour: number): string => {
  const time = new Date();
  const entire = parseInt(hour.toFixed(2).toString().split(".")[0]);
  const decimal = parseInt(hour.toFixed(2).toString().split(".")[1]);

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    hour12: true,
    minute: "numeric"
  };

  time.setHours(entire);
  time.setMinutes(decimalToMinute(decimal));

  return time.toLocaleTimeString("en-US", options);
};

export { minuteToHour, hourToMinute, setHourToTimeRequired };
