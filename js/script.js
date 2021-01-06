/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 *  @param {quote} quotes.quote Quote
 *  @param {source} quotes.source Who created the 
***/
const quotes = [
    {
      quote: 'The way to get started is to quit talking and begin doing.',
      source: 'Walt Disney'
    },
    {
      quote: 'If life were predictable it would cease to be life, and be without flavor.',
      source: 'Eleanor Roosevelt',
      citation: 'Song',
      year: '1945'
    },
    {
      quotes: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." ,
      source: 'Oprah Winfrey'
    },

];




/**
 * `getRandomQuote` function.
 *
 * @param {string} n - 
 * @return {string} A good string
 *    
 */
 function getRandomQuote (n) {
    let random = Math.floor(Math.random() * n.length);
     return n[random];
 }



/*
 * `printQuote` function
 *
 * @param {string} n - 
 * @return {string} A good string
 *    
 */
 function printQuote() {
   
 }


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);