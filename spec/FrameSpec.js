const Frame = require("../lib/Frame")

describe("Frame", function() {
  describe("#roll", function() {
      it("rolling adds to the frame score", function() {

        var frame = new Frame();
        frame.roll(7);
        expect(frame.getScore()).toBe(7);
    })

  });

  describe("#isComplete", function() {

    it("is complete(true) when two rolls have been played", function() {

        var frame = new Frame([7, 3]);
        var isComplete = frame.isComplete();
        expect(isComplete).toBe(true);
    });

    it("is incomplete(false) when less than two rolls have been played", function() {

        var frame = new Frame([7]);
        var isComplete = frame.isComplete();
        expect(isComplete).toBe(false);

    });
  })

})