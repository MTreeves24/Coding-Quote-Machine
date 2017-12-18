    var button = document.querySelector(".button")
    var quote = document.querySelector(".quote")
    var author = document.querySelector(".author")

button.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'http://quotes.stormconsultancy.co.uk/random.json');
    ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
        quote.innerHTML = ourData.quote;
        author.innerHTML = " - " + ourData.author;
};

ourRequest.send();
})

//Twitter integration
function tweetIt () {
  var quote = document.querySelector('.quote').innerText;
  var author = document.querySelector('.author').innerText;
  var tweetUrl = 'https://twitter.com/share?text=' +
    '"' + encodeURIComponent(quote) + '"' + encodeURIComponent(author);

  window.open(tweetUrl);
}