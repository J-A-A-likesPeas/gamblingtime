module.exports = function () {
const helper = require("pokerbot-helper");
  var info = {
    name: "CringeBot",
    email: "",
    btcWallet: ""
  };

  /*
    Modify the update() function with your code (node index.js )
    The update function *must* return the amount you wish to bet. raise to raise, call to call
    If you return less than the minimum required to call, your bot will fold, -1
  */
  function update(game) {
    if (game.state !== "complete") {
      //round of game, pre-flop choice, flop choice, turn choice, river choice, community card, own cards
      let result = helper.checkHand(game);
      console.log(result)

      return game.betting.call;
    }
  }

  return { update: update, info: info }

}
