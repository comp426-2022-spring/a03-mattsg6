function coinFlip() {
    let flip = Math.random();
    let result = "";
    if(flip < .5) {
      result = "heads";
    } else {
      result = "tails";
    }
    return result;
  }
  
function coinFlips(flips) {
    var arr = [];
    for(let x = 0; x < flips; x++){
        let coin = coinFlip();
        arr.push(coin);
    }
    return arr;
}
    
    
function countFlips(array) {
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

  
function flipACoin(call) {
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

const args = require('minimist')(process.argv.slice(2))
args['port']

const port = args.port || process.env.PORT || 5555


const express = require('express')
const app = express()

const server = app.listen(port, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%', port))
})

app.get('/app/', (req, res) => {
    // Respond with status 200
        res.statusCode = 200;
    // Respond with status message "OK"
        res.statusMessage = 'OK';
        res.writeHead( res.statusCode, { 'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' +res.statusMessage)
});

app.get('/app/flip/', (req, res) => {
    res.statusCode = 200
    res.statusMessage = 'OK'
    res.type("text/json")
    res.json(coinFlip())
})

app.get('/app/flips/:number', (req, res) => {
    res.statusCode = 200
    res.statusMessage = 'OK'
    res.type("text/json")
    var arr = coinFlips(req.params.number)
    res.json({"raw": arr,
    "summary": countFlips(arr)})
})

app.get('/app/flip/call/:call', (req, res) => {
    res.statusCode = 200
    res.statusMessage = 'OK'
    res.type("text/json")
    res.json(flipACoin(req.params.call))
})

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
    res.type("text/plain")
})