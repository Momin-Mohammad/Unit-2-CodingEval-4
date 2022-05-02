// write js code here corresponding to favourites.html


var matchData = JSON.parse(localStorage.getItem("favourites"));


displayData (matchData);

function displayData(data){

    data.forEach(function(elem,index){
        
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
        td6.innerText = "Delete";
        td6.style.color = "red";
        td6.addEventListener("click",function(){
            remove(elem,index);
        })

        tr.append(td1,td2,td3,td4,td5,td6);
        body.append(tr);
    })

    function remove(elem,index){
        event.preventDefault()
       matchData.splice(index,1)
       localStorage.setItem("favourites",JSON.stringify(matchData))
       window.location.reload();
    }
}