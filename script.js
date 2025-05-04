document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".fade-in").classList.add("visible");
});


const quotes = [
    "“There is no friend as loyal as a book.” – Ernest Hemingway",
    "“A reader lives a thousand lives before he dies.” – George R.R. Martin",
    "“Books are a uniquely portable magic.” – Stephen King",
    "“Not all those who wander are lost.” – J.R.R. Tolkien"
];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
