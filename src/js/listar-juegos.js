var form = document.querySelector("#form");
var ul = document.querySelector("#fixGames");

function buildList() {
    ul.innerHTML= "";
    for(var i in localStorage) {
        if (typeof localStorage[i] === "string") {
            var li = document.createElement("li");
            li.textContent=localStorage[i];
            ul.appendChild(li);
        }
    }
}

buildList();

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var game = document.querySelector("#addGame").value;
    if(game.length >= 1) {
        localStorage.setItem(game,game);
        buildList();
    }
});