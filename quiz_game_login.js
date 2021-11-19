function local() {
    document.getElementById("player1_name_input").value=localStorage.getItem("player1_name1");
    document.getElementById("player2_name_input").value=localStorage.getItem("player2_name1");
    console.log("Player 1 name = " + localStorage.getItem("player1_name1"));
    console.log("Player 2 name = " + localStorage.getItem("player2_name1"));
}

function adduser() {
    var p1 = document.getElementById("player1_name_input").value;
    var p2 = document.getElementById("player2_name_input").value;

    if((p1.length >= 1) && (p2.length >= 1)) {
        if(p1 != p2){
            var player1_name = document.getElementById("player1_name_input").value;
            var player2_name = document.getElementById("player2_name_input").value;
            var player1 = player1_name;
            var player2 = player2_name;
            localStorage.setItem("player1_name1", player1);
            localStorage.setItem("player2_name1", player2);
            window.location = "quiz_game.html";
        }
        else{
            window.alert("Player names are equal. Please enter different names.");
        }
    }
    else if((p1.length < 1) && (p2.length >= 1)){
        window.alert("Player 1 name input box is empty. You are requested to fill it.");
    }
    else if((p2.length < 1) && (p1.length >= 1)){
        window.alert("Player 2 name input box is empty. You are requested to fill it.");
    }
    else if((p1.length < 1) && (p2.length < 1)){
        window.alert("Player name inputs are empty. You are requested to fill them.");
    }
}