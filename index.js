// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",storeData)

var matchData = JSON.parse(localStorage.getItem("schedule")) || [];

function storeData (){
    event.preventDefault();

    var data = {
        matchNum : matchNum.value,
        teamA : teamA.value,
        teamB : teamB.value,
        date : date.value,
        venue : venue.value
    }

    matchData.push(data);
    localStorage.setItem("schedule",JSON.stringify(matchData))
     window.location.reload(); 
}

