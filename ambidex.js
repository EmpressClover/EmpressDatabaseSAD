
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