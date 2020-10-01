import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
// import navigation from "./navigation";

// const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
// document.getElementById("jokes").innerHTML = allJokes.join("");

/*
##########
1. Joke
##########
*/

document.getElementById("btn_Joke").addEventListener("click", function () {
    const jokeID = document.getElementById("inp_Joke").value;
    document.getElementById("txt_Joke").innerHTML = jokes.getJokeById(jokeID);
});

document.getElementById("btn_JokeIns").addEventListener("click", function () {
    const jokeInsert = document.getElementById("inp_JokeIns").value;
    jokes.addJoke(jokeInsert);
});


/*
##########
2. Quote
##########
*/

//2.3, 2.4
document.getElementById("btn_Quote").addEventListener("click", function () {

    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("txt_Quote").innerText = data.joke;
        });
});

//2.5
/*
By monitoring the network tab we are able to see that the qoute is updated 
every hour and therefor the quote gets a new ID.
It is possible because the only way to overcome the same-origin policy is to 
ensure that the requested resource from other origins includes 
the right HTTP headers such as Access-Control-Allow-Origin. 
In our case it is set with the wildcard * which means all.
*/

//2.6
function getQuoteHour() {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("txt_QuoteHour").innerText = data.joke;
        });
}
document.onload = getQuoteHour(); //Refrehses everytime document is loaded
setInterval(getQuoteHour, 360000); //Refreshes every hour

/*
##########
3. Extra: JS Event handling, HTML5 and inline SVG
##########
*/

document.getElementById("north").addEventListener("click", function(){
    document.getElementById("txt_Direction").innerHTML = "North";
});
document.getElementById("east").addEventListener("click", function(){
    document.getElementById("txt_Direction").innerHTML = "East";
});
document.getElementById("south").addEventListener("click", function(){
    document.getElementById("txt_Direction").innerHTML = "South";
});
document.getElementById("west").addEventListener("click", function(){
    document.getElementById("txt_Direction").innerHTML = "West";
});