import Clock from "./clock.js";

describe("Clock", () => {
  test("on the hour", () => {
    expect(Clock.at(8).toString()).toBe("08:00");
    expect(Clock.at(9).toString()).toBe("09:00");
  });

  test("past the hour", () => {
    expect(Clock.at(11, 9).toString()).toBe("11:09");
  });

  test("add a few minutes", () => {
    const clock = Clock.at(10).add(3);
    expect(clock.toString()).toBe("10:03");
  });

  test("adding does not mutate", () => {
    const oldClock = Clock.at(10);
    const newClock = oldClock.add(3);
    expect(newClock).not.toBe(oldClock);
  });

  test("subtract fifty minutes", () => {
    const clock = Clock.at(0).subtract(50);
    expect(clock.toString()).toBe("23:10");
  });

  test("subtracting does not mutate", () => {
    const oldClock = Clock.at(10);
    const newClock = oldClock.subtract(50);
    expect(newClock).not.toBe(oldClock);
  });

  test("add over an hour", () => {
    const clock = Clock.at(10).add(61);
    expect(clock.toString()).toBe("11:01");
  });

  test("wrap around at midnight", () => {
    const clock = Clock.at(23, 30).add(60);
    expect(clock.toString()).toBe("00:30");
  });

  test("add more than a day", () => {
    const clock = Clock.at(10).add(3061);
    expect(clock.toString()).toBe("13:01");
  });

  test("subtract a few minutes", () => {
    const clock = Clock.at(10, 30).subtract(5);
    expect(clock.toString()).toBe("10:25");
  });

  test("subtract minutes", () => {
    const clock = Clock.at(10).subtract(90);
    expect(clock.toString()).toBe("08:30");
  });

  test("equivalent clocks", () => {
    const clock1 = Clock.at(15, 37);
    const clock2 = Clock.at(15, 37);

    expect(clock1.isEqual(clock2)).toBe(true);
  });

  test("wrap around at negative midnight", () => {
    const clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toBe("23:30");
  });

  test("subtract more than a day", () => {
    const clock = Clock.at(10).subtract(3061);
    expect(clock.toString()).toBe("06:59");
  });

  test("inequivalent clocks", () => {
    const clock1 = Clock.at(15, 37);
    const clock2 = Clock.at(15, 36);
    const clock3 = Clock.at(14, 37);

    expect(clock1.isEqual(clock2)).toBe(false);
    expect(clock1.isEqual(clock3)).toBe(false);
  });

  test("wrap around backwards", () => {
    const clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toEqual("23:30");
  });
});
