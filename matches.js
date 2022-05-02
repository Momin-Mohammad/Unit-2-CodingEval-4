// write js code here corresponding to matches.html

var matchData = JSON.parse(localStorage.getItem("schedule"));

// var x = document.querySelector("#filterVenue").value;

// matchData.forEach(function(ele){
//     var x = document.querySelector("#filterVenue").value;
//     if(x == ele.venue)
//     {console.log(ele)}
// })

var favourites = JSON.parse(localStorage.getItem("favourites")) || [];

displayData (matchData);

function displayData(data){

    data.forEach(function(elem){
        
        var body = document.querySelector("tbody");

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerText = elem.matchNum;

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;

        var td5 = document.createElement("td");
        td5.innerText = elem.venue;

        var td6 = document.createElement("td");
        td6.innerText = "Favourite";
        td6.style.color = "green";
        td6.addEventListener("click",function(){
            toFav(elem);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        body.append(tr);
    })

    function toFav(elem){
        event.preventDefault()
        favourites.push(elem);
        localStorage.setItem("favourites",JSON.stringify(favourites))
    }
}