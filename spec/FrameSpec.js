const Frame = require("../lib/Frame")

describe("Frame", function() {
  describe("#roll", function() {
      it("rolling adds to the frame score", function() {

        var frame = new Frame();
        frame.roll(7);
        expect(frame.getScore()).toBe(7);
    })
  })
})