EnvJasmine.load(EnvJasmine.jsDir + "/mathFunctions.js");

describe("addNumbers", function () {
  it("returns the sum of the two integers it's passed", function() {
    expect(addNumbers(1, 2)).toEqual(3);
  });
});
