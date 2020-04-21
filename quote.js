let quoteList = ["this is a quote", "this is another quote", ];
let quote;

function randomQuote() {
  quote = quoteList[Math.floor(quoteList.length * Math.random())]
  console.log(quote);
  document.getElementById("quote").innerHTML = quote
}

function submit() {
  let input = document.getElementById("input").value
  addQuote(input);
}

function addQuote(quote) {
  quoteList.push(quote);
}
