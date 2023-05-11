import { addTime, compareDates, getDayTime, setDayTime } from "utils/date";
import type { DBTension } from "utils/db/types";

const getNextTension = (data: DBTension[]): Date => {
  const date = new Date();
  setDayTime(date, 0);
  if (data.length === 0) {
    date.setHours(6);
  } else {
    const times = data.map(({ date }) => getDayTime(date));
    const avg = times.reduce((a, b) => a + b) / times.length;
    const last = data[data.length - 1].date;
    if (compareDates(last, date, true) === 0) {
      addTime(date, 1, "day");
    }
    setDayTime(date, avg);
  }
  return date;
};

export { getNextTension };
