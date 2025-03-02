document.querySelector("button").addEventListener("click",change);



function change(){
    let randomnumber1=Math.floor(Math.random() * 6 + 1);
    let randomnumber2=Math.floor(Math.random() * 6 + 1);

    document.querySelector(".img1").setAttribute("src" , `images/dice${randomnumber1}.png`);
    document.querySelector(".img2").setAttribute("src" , `images/dice${randomnumber2}.png`);

    if(randomnumber1>randomnumber2){
        document.querySelector("#heading").innerHTML="Player1 Won";
    }
    else if(randomnumber1<randomnumber2){
        document.querySelector("#heading").innerHTML="Player2 Won";
        document.querySelector("#heading").style.style="";
    }
    else{
        document.querySelector("#heading").innerHTML="It's a Tie";
    }
    
}


