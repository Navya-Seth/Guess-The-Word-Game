function add_user(){
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;

    localStorage.setItem("key1" , player1 );
    localStorage.setItem("key2" , player2 );

    window.location = "game_page.html";
}
