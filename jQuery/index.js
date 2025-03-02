$("h1").css("color","red");
$("h1").addClass("bigtitle");
$("h1").removeClass("bigtitle");
$("h1").text("Deepanshi here");
$("h1").html("<em>Deepanshi</em> here");
// $("a").attr("href","https://developers.google.com/speed/libraries#jquery" );

$("h1").click(function(){
    $("h1").css("color","pink");
});

// $("button").click(function(){
//     $("h1").css("color","purple");
// });

var i=0;
var arr=[];
$("input").keydown(function(event) {
    
    var key = event.key;
    $("p").html(key);
    // $("p").addClass("font");
    arr[i++]=key;
    if(key=="Enter")
    {
        console.log(arr);
        return;
    }

});

$("button").click(function(){

    // $("h1").toggle(); // Show/Hide immediatelyy
    // $("h1").fadeToggle();
    // $("h1").text(" D");
    // $("h1").slideToggle();
    $("h1").slideUp().animate({opacity:0.5});

})


