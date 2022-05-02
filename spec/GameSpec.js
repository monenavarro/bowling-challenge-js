const Game = require("../lib/Game")

describe("Game", function(){

    describe("#roll", function() {

        var game, activeFrame1, activeFrame2;

        beforeEach(function() {

            var inactiveFrame = { isComplete: true }
            activeFrame1 = { isComplete: false, roll: () => false };
            activeFrame2 = { isComplete: false, roll: () => false };

            game = new Game([ inactiveFrame, activeFrame1, activeFrame2 ]);
            spyOn(activeFrame1, 'roll');
            spyOn(activeFrame2, 'roll');

            game.roll(4);

        });
        
        it("implements the roll to the first active frame", function() {

            expect(activeFrame1.roll).toHaveBeenCalledWith(4);
        });

        it("does not implement the roll to the next active frame", function() {

            expect(activeFrame2.roll).not.toHaveBeenCalledWith();
        });
    });
});