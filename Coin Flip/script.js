function chance(choice){
    let otxt = document.getElementById("output");
    let coin = toss();

    if (coin == choice){
        otxt.innerHTML = `You chose <b>${choice}</b>. Congrats, you were correct!`;
    } else {
        otxt.innerHTML = `You chose <b>${choice}</b>. The coin landed on <b>${coin}</b>. Try again.`;
    }

}

function toss(){
    let num = Math.floor(Math.random() * 100) + 1
    var side;
    if (num % 2 == 0){
    	side = "heads";
    } else {
    	side = "tails";
    }
  	return side;
}