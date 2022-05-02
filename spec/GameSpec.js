const Game = require("../lib/Game")

describe("Game", function(){

    describe("#roll", function() {
        
        it("implements the roll to the active frame", function() {

            var inactiveFrame = { active: false }
            var activeFrame = { active: true, roll: () => false };
            var game = new Game([ inactiveFrame, activeFrame ]);
            spyOn(activeFrame, 'roll');

            game.roll(4);

            expect(activeFrame.roll).toHaveBeenCalledWith(4);
        });
    });
});