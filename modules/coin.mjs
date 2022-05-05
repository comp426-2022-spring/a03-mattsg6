/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

export function coinFlip() {
  let flip = Math.random();
  let result = "";
  if(flip < .5) {
    result = "heads";
  } else {
    result = "tails";
  }
  return result;
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

    export function coinFlips(flips) {
      var arr = [];
      for(let x = 0; x < flips; x++){
        let coin = coinFlip();
        arr.push(coin);
      }
      return arr;
    }
    
    /** Count multiple flips
     * 
     * Write a function that accepts an array consisting of "heads" or "tails" 
     * (e.g. the results of your `coinFlips()` function) and counts each, returning 
     * an object containing the number of each.
     * 
     * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
     * { tails: 5, heads: 5 }
     * 
     * @param {string[]} array 
     * @returns {{ heads: number, tails: number }}
     */
    
    export function countFlips(array) {
      let heads = 0;
      let tails = 0;
      let counter = {heads, tails};
      let counterHeads = {heads}
      let counterTails = {tails}
      for(let x = 0; x < array.length; x++){
        if(array[x] == "heads"){
          heads++;
        }
        else{
          tails++;
        }
      }
      if(heads > 0 && tails > 0){
        counter.heads = heads;
        counter.tails = tails;
        return counter;
      }
      else if(heads > 0 && tails == 0){
        counterHeads.heads = heads;
        return counterHeads;
      }
      else{
        counterTails.tails = tails;
        return counterTails;
      }
    }

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

export function flipACoin(call) {
  if(call == null || call == ""){
    throw 'Error: no input'
  }
  if(call == 'heads' || call == 'tails'){
    let info = {call: call, flip: "", result: ""};
    let coinF = coinFlip();
    let result = "";
    if(call == coinF){
      result = "win";
    } else {
      result = "lose"
    }
    info.flip = coinF;
    info.result = result;
    return info;
  }
  throw 'Usage: node guess-flip --call=[heads|tails]'
}


/** Export 
 * 
 * Export all of your named functions
*/
