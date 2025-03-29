// Display a surprise message with a custom text after a few seconds.
setTimeout(function() {
    const surpriseMessage = document.createElement('p');
    surpriseMessage.innerText = "Puntuu, you're my everything and more. I love you forever!";
    surpriseMessage.style.fontSize = "1.5em";
    surpriseMessage.style.color = "#ff6f61";
    document.querySelector('.container').appendChild(surpriseMessage);
}, 3000);
