//Creates an array of quotes that can also be temporarily hold new quotes
let rQuoteStoreage = [
  "I'm lost -Daniel Williams",
  "I'm sorry Nate, but Harry is not here for me to assault today -Ashton Sisson",
  "Use slack -Mr. Smith",
  "Life Tip: Dolphins are just smooth sharks",
  "Outcome hazy, try again later",
  "Beep Beep Lettuce",
  "Fun Fact:ℸ ̣ ᒷᔑᒲ ʖ is the best company",
  "Sir can you not assault the image person's chair- Nathan Cunningham",
  "SUB TO NATE PLAYS GAMES!!! https://www.youtube.com/channel/UCHSDJZkW8WWwME36ZMvfuFg",
  "Oh no this can't be good -Daniel Williams",
  "Its a hoodie hoodie - Mykal Luciano",
  "Beans",
  "NO - Daniel Williams",
  "I will never be as smart as function -Daniel Williams",
  "He's literally just writing stuff down while im saying it -Daniel Williams",
  "My whole life is a lie -Daniel Williams",
  "<img src='../images/OWA.png' alt='OWA.png is supossed to be here...'>",
  "Im an airplaine! PRPRPRPRPRPPRRPPRPRPRPRPRPRPPRPRPRRRPPPP -Ashton Sisson",
  "<img src='https://www.minecraft.net/content/dam/minecraft/news/everything-we-announced-at-minecon-live-2019/TileFourByTwo.png'>",
  "I've oversanitised! -Ashton Sisson",
  "Harry can you play the SpongeBob thing? -Ashton Sisson",
  "You've been blinded by meglovania! -Ashton Sisson",
  "Not now I'm Goofy Goobering -Ashton Sisson No Your not allowed -Nathan Cunningham",
  "Get smacked -Harry Nelson",
];

//function picks a random number from zero to the highest index of rQuoteStoreage and sets the quote in the document to it
function randomQuote() {
  document.getElementById("quote").innerHTML = rQuoteStoreage[Math.floor(rQuoteStoreage.length * Math.random())]
}

//pushes a new quote to rQuoteStoreage
function submit() {
  rQuoteStoreage.push(document.getElementById("input").value)
}
