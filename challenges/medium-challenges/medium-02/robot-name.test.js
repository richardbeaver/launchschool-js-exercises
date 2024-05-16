import Robot from "./robot-name.js";
import seedrandom from "seedrandom";

describe("Robot Name", () => {
  const NAME_REGEXP = /^[A-Z]{2}\d{3}$/;
  const DIFFERENT_ROBOT_NAME_SEED = "1234";
  const SAME_INITIAL_ROBOT_NAME_SEED = "1000";

  test("has name", () => {
    expect(new Robot().name()).toMatch(NAME_REGEXP);
  });

  test("name sticks", () => {
    const robot = new Robot();
    const name = robot.name();
    expect(robot.name()).toBe(name);
  });

  test("different robots have different names", () => {
    seedrandom(DIFFERENT_ROBOT_NAME_SEED, { global: true });

    const robot1 = new Robot();
    const robot2 = new Robot();

    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("different name when chosen name is taken", () => {
    seedrandom(SAME_INITIAL_ROBOT_NAME_SEED, { global: true });
    const robot1 = new Robot();
    seedrandom(SAME_INITIAL_ROBOT_NAME_SEED, { global: true });
    const robot2 = new Robot();
    expect(robot1.name()).not.toBe(robot2.name());
  });

  test("reset name", () => {
    seedrandom(DIFFERENT_ROBOT_NAME_SEED, { global: true });

    const robot = new Robot();
    const name1 = robot.name();
    robot.reset();
    const name2 = robot.name();

    expect(name1).not.toBe(name2);
  });
});
