player1_name = localStorage.getItem("key1");
player2_name = localStorage.getItem("key2");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_Q").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_A").innerHTML = "Answer Turn : " + player2_name;


function send(){
    get_word = document.getElementById("word").value; 
    word =  get_word.toLowerCase();
    console.log("Word In Lower Case = " + word);
    charAt = word.charAt(1);
    console.log(charAt);
    half_length = Math.floor(word.length/2);
    charAt2 = word.charAt(half_length);
    console.log(charAt2);
    lengthminus1 = word.length-1;
    charAt3 = word.charAt(lengthminus1);
    console.log(charAt3);
    remove_charAt = word.replace(charAt,"_");
    remove_charAt2 = remove_charAt.replace(charAt2,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    inputbox = "<br> Answer : <input type = 'text' id = 'check'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + inputbox + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "player_1";
ans_turn = "player_2";

function check(){
   get_ans = document.getElementById("check").value;
   answer = get_ans.toLowerCase();
   console.log("ans in lower case = " + answer);
   if (word==answer){
    if(ans_turn=="player_1"){
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML=player1_score;

    }
    else{
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML=player2_score;
    }

   }
   if(question_turn == "player_1"){
    question_turn = "player_2"
    document.getElementById("player_Q").innerHTML = "Question Turn : " + player2_name;
   }
   else{
    question_turn = "player_1"
    document.getElementById("player_Q").innerHTML = "Question Turn : " + player1_name;
   }

   if(ans_turn == "player_1"){
    ans_turn = "player_2"
    document.getElementById("player_A").innerHTML = "Answer Turn : " + player2_name;
   }
   else{
    ans_turn = "player_1"
    document.getElementById("player_A").innerHTML = "Answer Turn : " + player1_name;
   }

   document.getElementById("output").innerHTML="";


}

