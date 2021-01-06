/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 *  @typedef {Object} quotes
 *  @property {quote} quotes.quote - Quote
 *  @property {source} quotes.source - Who created the quote
 * 
 * 
***/
const quotes = [
    {
      quote: 'The way to get started is to quit talking and begin doing.',
      source: 'Walt Disney',
      tags: ['#kids', '#play', '#humor']
    },
    {
      quote: 'If life were predictable it would cease to be life, and be without flavor.',
      source: 'Eleanor Roosevelt',
      citation: 'Song',
      year: '1945',
      tags: ['#life', '#happy']
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." ,
      source: 'Oprah Winfrey',
      tags: ['#politics', '#free', '#time']
    },
    {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough." ,
      source: 'Steve Jobs',
      citation: 'Computing',
      year: '1996',
      tags: ['#computer', '#modern', '#mobile', '#apple'],
    },
    {
      quote: "Curiosity about life in all of its aspects, I think, is still the secret of great creative people." ,
      source: 'Leo Burnett',
      tags: ['#humor', '#politics']
    },
   

];




/**
 * `getRandomQuote` function.
 *
 * @param {string} n  - Return a random quote object using the random number variable  
 * @return {string} Return the random object from array
 * 
 */

 function getRandomQuote (n) {

    let random = Math.floor(Math.random() * n.length);
    
     return n[random];
 }



/*
 * `printQuote` function
 *    
 *    
 *    @return {string} A concatenated string and passed to quote-box class
 */
 function printQuote() {
      let quotePrint = getRandomQuote(quotes);
      let tags = '';
      let html = `<p class="quote">${quotePrint.quote}</p>
      <p class="source">${quotePrint.source}`;
    
      if(quotePrint.citation) {
          html += `<span class="citation">${quotePrint.citation}</span>`;
      }

      if(quotePrint.year) {
        html += `<span class="citation">${quotePrint.year}</span>`;
      }

      html += `</p>
      <ul class="tag-items">`
          for(let i = 0; i <= quotePrint.tags.length -1; i++) {
             html += ` <li><a href="#" class="tags">${quotePrint.tags[i]}</a></li>`
          }    
          
         
      html += `</ul>`; // html variable concatenate all strings "quote", "source", "tags" ...
      
      changeBackground();   
      return document.getElementById('quote-box').innerHTML = html;
     
 }



  /*
 * `randomNumber` function
 *    
 *    
 *    @return {number} A random number
 */

function randomNumber(n) {

  let random = Math.floor(Math.random() * n);
  return random;

}


 /*
 * `changeBackground` function
 *    
 *    
 *    @return {string} Set the background to rgba
 */

  function changeBackground() {

   return document.body.style.backgroundColor = `rgba(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}, 0.5)`;

  }
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);