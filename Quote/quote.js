const fs = require('fs');

let quoteList = ["this is a quote", "this is another quote"]
let quote

function randomQuote() {
quote = math.floor(quoteList.length()*math.random())
console.log(quote);
  //set text to quote
}

function submit() {
  addQuote(/*input from form goes here*/);
}

function addQuote(quote) {
quoteList.append(quote);
//write quoteList to JSON
}
