var quotes = [
    '"The only way to do great work is to love what you do."<br> --Steve Jobs',
    '"The best time to plant a tree was 20 years ago. The second best time is now." <br> --Chinese Proverb',
    '"Your limitation—it’s only your imagination." <br> --Jimy',
    '"Be yourself; everyone else is already taken" <br> --Oscar Wilde',
    '"You are never too old to set another goal or to dream a new dream." <br> --C.S. Lewis',
    '"The future belongs to those who believe in the beauty of their dreams." <br> --Eleanor Roosevelt',
    '"The best way to predict the future is to create it." <br> --Peter Drucker',
    '"The only limit to our realization of tomorrow will be our doubts of today." <br> --Franklin D. Roosevelt',
    '"Dream it. Wish it. Do it." <br> --Jamjoom',
    '"Don’t watch the clock; do what it does. Keep going." <br> --Sam Levenson',
    '"You are amazing. Remember that." <br> --Mohamed Salah',
    '"The harder you work for something, the greater you’ll feel when you achieve it." <br> --Messi',
    '"Dream it. Believe it. Build it." <br> --Ronaldo',
    '"Don’t stop when you’re tired. Stop when you’re done." <br> --Zidane'];
var prevIndex = -1;
function generateQuote() {
    var randomIndex =  Math.floor(Math.random() * quotes.length);
    while (prevIndex == randomIndex) {
        randomIndex =  Math.floor(Math.random() * quotes.length);
    }
    document.getElementById('quote').innerHTML = quotes[randomIndex];
    console.log(randomIndex);
    prevIndex = randomIndex;
}