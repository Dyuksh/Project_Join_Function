function getparagraph1(){
    var input = [];
    for (var i = 1; i <=6;i++){
      
        input.push(document.getElementById("p1_." + i).value);


    }
    document.getElementById("showparagraph1").innerHTML = input.join(".");
}




function getparagraph2(){
    var input = [];
    for (var i = 1; i <=6;i++){
      
        input.push(document.getElementById("p2_." + i).value);


    }
    document.getElementById("showparagraph2").innerHTML = input.join(".");
}