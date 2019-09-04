var drumButtons = document.getElementsByClassName("drum");

//Event Listeners
document.addEventListener("keydown", function(e){
    pressKey(e.key);
});

for(var i = 0; i < drumButtons.length; i++){
    drumButtons[i].addEventListener("click", function(){
        pressKey(this.innerHTML);
    });


}


function pressKey(key){
    callSound(key);
    keyPressAnimation(key);
}

async function keyPressAnimation(key){

    document.querySelector("."+key).classList.add("pressed");
    await sleep(300);
    document.querySelector("."+key).classList.remove("pressed");
    
}

//Function play certain sound according to the key(string)
function callSound(key){

    var audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "j":
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        default:
            break;
    }

    
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}