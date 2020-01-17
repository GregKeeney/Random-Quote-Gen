/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*
Declaring all the quotes in an array as objects including years and citations
if they were available.  Added reference to give certain quotes better context
*/
var quotes = [
  {
    quote: "A lot of indie developers who became 'Overnight Successes' were working at it for ten years.",
    source: "Dan Adelman",
    reference: 'Video Games'
  },
  {
    quote: "Golden rule of level design - Finish your first level last",
    source: "John Romero",
    citation: "Devs Play S01E05",
    year: "2015",
    reference: 'Video Games'
  },
  {
    quote: "Lets optimize for player experience rather than what we think will make more money.",
    source: "Ron Carmel",
    citation: "Gamasutra.com",
    year: "2014",
    reference: 'Video Games'
  },
  {
    quote: "It should be the experience, that is touching. What I strive for is to make the person playing the game the director.",
    source: "Shigeru Miyamoto",
    reference: 'Video Games'
  },
  {
    quote: "It seems that perfection is attained not when there is nothing more to add, but when there is nothing more to remove.",
    source: "Antoine de Saint Exupéry",
    citation: "Terre des Hommes",
    year: "1939"
  },
  {
    quote: '"You miss 100% of the shots you don\'t take. - Wayne Gretzky"',
    source: "Michael Scott",
    citation: "The Office S05 E23",
    year: "2009"
  }
];
//Resets the quote on an automatic timer set to a variable for possible interactions within the code

var quoteRefresh = setInterval(printQuote, 10000);

/*
  Takes an array generates a random index and returns
  that idex and returns a random quote object.
*/
function getRandomQuote(arr) {
  var randomQuote = {};
  var index = Math.floor(Math.random() * arr.length);
  randomQuote = arr[index];
  return randomQuote;
}

/*
  Grabs and returns a random number from 0-255 to set random RGB colors
*/

function randomRGB(){
  return Math.floor(Math.random() * 256 );
}

/*
  Creates the HTML string needed to set the background color by calling the randomRGB function.
  Then sets the background color.
*/
function setBackground(){
  var bgColor = 'rgb(';
  bgColor += randomRGB() + ',';
  bgColor += randomRGB() + ',';
  bgColor += randomRGB() + ')';

  document.body.style.background = bgColor;
}

/*
  Calls the getRandomQuote function and stores the randomized quote in a new object.
  Then begins to build the HTML string starting with the quote and source data.
  Checks if there is a year, citation or reference and adds that code to the HTML string
  and prints that string.
*/
function printQuote(){
  var html = '';
  var quoteData = getRandomQuote(quotes);
  clearInterval(quoteRefresh);  // Prevents instant refresh
  setBackground(); //Sets a random color for the background.
  html += '<p class="quote">' + quoteData.quote + '</p>';
  html += '<p class="source">' + quoteData.source;
  if(quoteData.citation){
    html += '<span class="citation">' + quoteData.citation + '</span>'
  }
  if(quoteData.year){
    html += '<span class="year">' + quoteData.year + '</span>'
  }
  if(quoteData.reference){
    html += '<span>, In reference to ' + quoteData.reference + '</span>'
  }
  html +='</p>';
  document.getElementById('quote-box').innerHTML = html;
  quoteRefresh = setInterval(printQuote, 10000); // Resets the refresh timer
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
