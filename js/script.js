/******************************************
 * CSIS3380:Project / Lab1
 * Display Random Phrases / Flash Cards
 * This script file gets random quote from 
 * array and generates the quote into the 
 * exisiting html when the button is clicked.
 * Sung-won Kim, 300320693
*****************************************/

/*** 
 * `quotes` array 
***/
const quotes = [{quote: "In a gentle way, you can shake the world.", source: "Mahatma Gandhi", citation: "Parade", year: "2021"}, 
                {quote: "Whoever is happy will make others happy too.", source: "Anne Frank", citation: "Parade", year: "2021"}, 
                {quote: "Focus more on the people who inspire you rather than the people who annoy you. You'll get much further in life.", source: "Kristen Butler", citation: "Twitter", year: "2022"}, 
                {quote: "We are born in 1 day. We die in 1 day. We can change in 1 day. We can fall in love in 1 day. Anything can happen in just 1 day.", source: "Fayle Foreman", citation: "Twitter", year: "2022"}, 
                {quote: "Life can only be understood backwards; But it must be lived forwards.", source: "Soren Kierkegaard", citation: "Facebook", year: "2022"}, 
                {quote: "Impossible is just an opinion.", source: "Paulo Coelho", citation: "Facebook", year: "2022"},
                {quote: "Let's set the direction we want to go and do baby steps for it.", source: "Sung-won Kim", citation: "", year: "2022"}, // for test
                {quote: "The happiness of life comes from my heart. Let's take good care of my mind.", source: "Sung-won Kim", citation: "", year: ""} // for test
];

//Log for quotes array
console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote () {
    //1.Create a variable that generates a random number
    //between zero and the last index in the `quotes` array
    const randomNumber = Math.floor(Math.random() * quotes.length);

    //2.Use the random number variable and bracket notation
    //to grab a random object from the `quotes` array, and
    //store it in a variable
    const obj = quotes[randomNumber];

    //3.Return the variable storing the random quote object
    return obj;
}


/***
 * `printQuote` function
***/
function printQuote () {
    // 1. Create a variable that calls the getRandomQuote() function
    let RandomQuote = getRandomQuote();
    // Log for quote object
    console.log(RandomQuote);

    // 2. Create a variable that initiates your HTML string with
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off
    // the second closing `</p>` tag for now
    let PtoHTML = "<p class='quote'>" + RandomQuote.quote + "</p>";
    PtoHTML += "<p class='source'>" + RandomQuote.source;

    // 3. Use an if statement to check if the citation property
    // exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property
    // to the HTML string
    if(!RandomQuote.citation == "") {
        PtoHTML += "<span class='citation'>" + RandomQuote.citation + "</span>";
    }

    // 4. Use an if statement to check of the year property exists,
    // and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML
    // string
    if(!RandomQuote.year == "") {
        PtoHTML += "<span class='year'>" + RandomQuote.year + "</span>";
    }

    // 5. After the two if statements, concatenate the closing </p>
    // tag to the HTML string
    PtoHTML += "</p>";

    // 6. set the innerHTML of the quote-box div to equal the
    // complete HTML string}
    document.getElementById('quote-box').innerHTML = PtoHTML;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/
// replace text of the button with string required from instruction
document.getElementById('load-quote').innerHTML = "Show another quote";
// register button click event handler
document.getElementById('load-quote').addEventListener('click', printQuote);
// display initial random quote
printQuote();