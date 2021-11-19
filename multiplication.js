var player1_score = 0;
var player2_score = 0;
var question_turn = localStorage.getItem("player1_name1");
var answer_turn = localStorage.getItem("player2_name1");
var player1_name = question_turn;
var player2_name = answer_turn;

function update() {
    document.getElementById("player1_name").innerHTML=localStorage.getItem("player1_name1") + ":";
    document.getElementById("player2_name").innerHTML=localStorage.getItem("player2_name1") + ":";
    document.getElementById("player1_score").innerHTML=player1_score;
    document.getElementById("player2_score").innerHTML=player2_score;
    document.getElementById("qturn").innerHTML=player1_name;
    document.getElementById("aturn").innerHTML=player2_name;
}

function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    if((n1.length >= 1) && (n2.length >= 1) && ((n1 > 0) && (n2 > 0))) {
        document.getElementById("content").innerHTML='<h4 id="Question">' + n1 + ' × ' + n2 + '</h4><br><p>Answer:<span><input type="number" id="ans"></span></p><br><button class="btn btn-info" onclick="check()">Check</button>';
        document.getElementById("n1").value="";
        document.getElementById("n2").value="";
    }
}

function check() {
    var answer = document.getElementById("ans").value;

    if(answer.length >= 1) {
        scoreDecide();
        changePlayer();
        document.getElementById("content").innerHTML="";
    }
    else if(answer.length < 1){
        window.alert("Please write your answer in the box.");
    }
}

function changePlayer() {
    var previous_answer_turn = answer_turn;
    var previous_question_turn = question_turn;
    question_turn = previous_answer_turn;
    answer_turn = previous_question_turn;
    document.getElementById("qturn").innerHTML=question_turn;
    document.getElementById("aturn").innerHTML=answer_turn;
}

function scoreDecide() {
    var given_answer = document.getElementById("ans").value;
    var correct_answer = n1 * n2;
    console.log(n1 + " × " + n2 + " = " + (n1 + n2));
    if(given_answer == correct_answer) {
        if(answer_turn == localStorage.getItem("player2_name1")) {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
        if(answer_turn == localStorage.getItem("player1_name1")) {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
    }
}