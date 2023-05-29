import {
  addTime,
  compareDates,
  dateToString,
  formatDate,
  formatTime,
  getDayTime,
  setDayTime
} from "./index";

describe("date", () => {
  it("Format a date", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 03:24:00:00");
    const expected = new Date(2000, 11, 24, 3, 24, 0)
      .toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short"
    });
    expect(formatDate(date)).toBe(expected);
  });

  it("Format a time", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 03:24:00:00");
    const expected: string = new Date(0, 0, 0, 3, 24).toLocaleTimeString(
      undefined,
      {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit"
      }
    );
    expect(formatTime(date)).toBe(expected);
  });

  it("Add a time", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 03:24:00:00");
    const expected: Date = new Date("December 24, 2000 08:24:00:00");
    expect(addTime(date, 5, "hour").getTime()).toBe(expected.getTime());
  });

  it("Compare dates", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 05:00:00:00");
    const date2: Date = new Date("December 25, 2000 05:00:00:00");
    const expected = 86400000;
    expect(compareDates(date2, date)).toBe(expected);
  });

  it("Convert full date to string", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 05:00:00:00:00");
    const expected: string = new Date(
      2000,
      11,
      24,
      5,
      0,
      0,
      0
    ).toLocaleTimeString(undefined, {
      day: "2-digit",
      hour: "2-digit",
      hour12: true,
      minute: "2-digit",
      month: "short"
    });

    expect(dateToString(date, "full")).toBe(expected);
  });

  it("Convert date to string", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 05:00:00:00:00");
    const expected = new Date(2000, 11, 24, 3, 24, 0)
      .toLocaleDateString(undefined, {
      day: "2-digit",
      month: "short"
    });
    expect(dateToString(date, "date")).toBe(expected);
  });

  it("Convert date time to string", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 05:00:00:00:00");
    const expected: string = new Date(0, 0, 0, 5, 0, 0, 0).toLocaleTimeString(
      undefined,
      {
        hour: "2-digit",
        hour12: true,
        minute: "2-digit"
      }
    );

    expect(dateToString(date, "time")).toBe(expected);
  });

  it("Get day time", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 05:00:00:00:00");
    const expected = 0;
    expect(getDayTime(date)).toBe(expected);
  });

  it("Set day time", () => {
    expect.assertions(1);

    const date: Date = new Date("December 24, 2000 03:24:00:00");
    const expected: Date = new Date("December 24, 2000 05:00:00:00");
    expect(setDayTime(date, 5, "hour").getTime()).toBe(expected.getTime());
  });
});