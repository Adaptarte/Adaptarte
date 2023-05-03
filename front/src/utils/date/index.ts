import type { DateFormat, TimeUnit } from "./types";

const TIME: Record<TimeUnit, number> = {
  day: 1000 * 60 * 60 * 24,
  hour: 1000 * 60 * 60,
  min: 1000 * 60,
  ms: 1,
  sec: 1000
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short"
  });
};

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    hour12: true,
    minute: "2-digit"
  });
};

const addTime = (date: Date, time: number, unit: TimeUnit = "ms"): Date => {
  date.setTime(date.getTime() + TIME[unit] * time);
  return date;
};

const compareDates = (a: Date, b: Date, ignoreTime = true): number => {
  const d1 = new Date(a);
  const d2 = new Date(b);
  if (ignoreTime) {
    setDayTime(d1, 0);
    setDayTime(d2, 0);
  }
  return d1.getTime() - d2.getTime();
};

const dateToString = (date: Date, format: DateFormat = "full"): string => {
  if (format === "date") {
    return formatDate(date);
  }
  if (format === "time") {
    return formatTime(date);
  }
  return `${formatDate(date)}, ${formatTime(date)}`;
};

const getDayTime = (date: Date): number => {
  const midnight = setDayTime(new Date(date), 0);
  return compareDates(date, midnight);
};

const setDayTime = (date: Date, time: number, unit: TimeUnit = "ms"): Date => {
  date.setHours(0, 0, 0, 0);
  return addTime(date, time, unit);
};

export {
  formatDate,
  formatTime,
  addTime,
  compareDates,
  dateToString,
  getDayTime,
  setDayTime,
  TIME
};
