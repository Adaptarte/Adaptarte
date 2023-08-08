const minuteToHour = (minute: number): number => {
  return minute / 60;
};

const hourToMinute = (hour: number): number => {
  return hour * 60;
};

const hourToTime = (hour: number): Date => {
  const time = new Date();
  time.setHours(Math.floor(hour), hourToMinute(hour % 1));

  return time;
};

const timeToString = (time: Date): string => {
  return time.toLocaleTimeString(undefined, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
};

export { hourToMinute, hourToTime, timeToString, minuteToHour };
