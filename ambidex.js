
function myFunction() {
    input = document.getElementById("Search"); 
    filter = input.value.toUpperCase();
    //Show all div class target
    $("div.target").show();
    //All div class target that not contains filter will be hidden
    $('div.target').each(function(index, elem){
    if($(elem).text().toUpperCase().includes(filter)) { //Not hidden 
    } else { $(elem).hide(); } 
    });
    } 


    var clicks = 0;
function clickME() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}


var clicks = 0;
function clickME5() {
    clicks -= 2;
    document.getElementById("clicks").innerHTML = clicks;
}


var clicks = 0;
function clickME6() {
    clicks -= 3;
    document.getElementById("clicks").innerHTML = clicks;
}



var clicks = 0;
function clickME2() {
    clicks += 3;
    document.getElementById("clicks").innerHTML = clicks;
}

var clicks = 0;
function clickME3() {
    clicks += 2;
    document.getElementById("clicks").innerHTML = clicks;
}

var clicks = 0;
function clickME4() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}