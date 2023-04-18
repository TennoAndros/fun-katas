const foldString = require("../fold-string");

describe("foldStrings", () => {
  test("should fold a string ", () => {
    expect(foldString("c")).toEqual("c");
    // // expect(foldString("ca")).toEqual("ac");
    // expect(foldString("abc")).toEqual("cba");
    expect(foldString("code")).toEqual("oced");

    expect(foldString("abcdef")).toEqual("cbafed");
    expect(foldString("javascript")).toEqual("savajtpirc");
    expect(foldString("Northcoders")).toEqual("htroNcsredo");
    expect(foldString("javascript is cool")).toEqual("savajtpirc is oclo");
    expect(foldString("javascript is cool cool")).toEqual("savajtpirc si oclo oclo");
    expect(foldString("")).toEqual("")
 
   
  });
});
