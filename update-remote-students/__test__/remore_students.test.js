const updateRemoteStudents = require("../update-remote-students");

describe("get location ifo", () => {
  test("should return arrray of objects ", () => {
    expect(Array.isArray(updateRemoteStudents([]))).toEqual(true);
    expect(updateRemoteStudents([{ name: "Euler", age: 27 }])).toEqual([
      { name: "Euler", age: 27, location: "remote" },
    ]);
    expect(
      updateRemoteStudents([
        { name: "Hypatia", age: 31, location: "leeds" },
        { name: "Ramanujan", age: 22 },
        { name: "Tao", age: 47, location: "manchester" },
      ])
    ).toEqual([
      { name: "Hypatia", age: 31, location: "leeds" },
      { name: "Ramanujan", age: 22, location: "remote" },
      { name: "Tao", age: 47, location: "manchester" },
    ]);
  });
});
