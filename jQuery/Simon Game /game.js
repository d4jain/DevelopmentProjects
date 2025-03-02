


var gamePattern=[];
var userClickPattern=[];
var buttonColor=["red","blue","green","yellow"];

var started=false;
var level=0;
var keyCounter=0;


// nextSequence();

$(document).keydown(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").on("click",function(event){
    var userChosenColor=event.target.id;

    playSound(userChosenColor);
    animatePress(userChosenColor);

    // $("#level-title").text(`Level ${level}`);
    keyCounter++;  //Count how many times key is pressed
    
    userClickPattern.push(userChosenColor);
    console.log(userClickPattern);
    let l=userClickPattern.length;
    // while(l>0 && userClickPattern[l-1]==gamePattern[l-1]){
    //     l--;
    // }
    // if(l==0)
    // {

    //     nextSequence();
    // }

    // else{
    //     $("#level-title").text(`Game Over`);
    //     setTimeout(function(){
    //         $("#level-title").text(`Start Again`);
    //     },1000);
    //     level=0;
    // }

    checkAnswer(l-1)
});

function nextSequence(){

    userClickedPattern = [];
    level++;
    $("#level-title").text(`Level ${level}`);
    

    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor= buttonColor[randomNumber];
    console.log(randomChosenColor);
    gamePattern.push(randomChosenColor);
    $(`#${randomChosenColor}`).fadeOut(50).fadeIn(50);

$(`#${randomChosenColor}`).click(function(){
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    
});

    
}

// var randomChosenColor= buttonColor[nextSequence()];
// console.log(randomChosenColor);
// gamePattern.push(randomChosenColor);

// $(`#${randomChosenColor}`).click(function(){
//     $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);});

// playSound(randomChosenColor)
// {}
//     var audio = new Audio(`sounds/${randomChosenColor}.mp3`);
//     audio.play();
// });



function playSound(name)
{
   
        var audio = new Audio(`sounds/${name}.mp3`);
        audio.play();

}

function animatePress(currentColor)
{
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function(){
        $(`#${currentColor}`).removeClass("pressed");
    },100);
}


function checkAnswer( index ){

    if(userClickPattern[index]== gamePattern[index])
    {
        console.log("Success");
        console.log(userClickPattern);
        console.log(gamePattern);
        nextSequence();


    }
    else{
        console.log("Fail");
        console.log(userClickPattern);
        console.log(gamePattern);
        $("#level-title").text(`Game Over`);
        setTimeout(function(){
            $("#level-title").text(`Start Again`);
        },1000);
        level=0;
    }

}


