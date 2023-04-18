const getTweetData = require("../get-tweet-data");

describe("get Tweet Data", () => {
  test("should return an object", () => {
    expect(typeof getTweetData("")).toEqual("object");
  });
  test("should get the length of the tweet", () => {
    expect(getTweetData("dog")).toEqual({
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 3,
    });
    expect(getTweetData("My awesome tweet to @northcoders")).toEqual({
      tags: [],
      mentions: ["@northcoders"],
      tagCount: 0,
      mentionCount: 1,
      length: 32,
    });
    expect(getTweetData("My awesome tweet about #coding")).toEqual({
      tags: ["#coding"],
      mentions: [],
      tagCount: 1,
      mentionCount: 0,
      length: 30,
    });
    expect(
      getTweetData("My awesome tweet about #coding to @northcoders")
    ).toEqual({
      tags: ["#coding"],
      mentions: ["@northcoders"],
      tagCount: 1,
      mentionCount: 1,
      length: 46,
    });
    expect(
      getTweetData(
        "I am #coding with @northcoders I love #coding and @northcoders"
      )
    ).toEqual({
      tags: ["#coding"],
      mentions: ["@northcoders"],
      tagCount: 1,
      mentionCount: 1,
      length: 62,
    });
  });
});
