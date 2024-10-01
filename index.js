var x=document.querySelectorAll("button").length

for(var i=0;i<x;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",function ()
{
    var y=this.innerHTML
  fuck(y);
  
})
}


document.addEventListener("keypress",function(event)
{
    console.log(event);
    fuck(event.key);
} )


function  fuck(key)
{var element= key
  switch (element) {
    case "s":
    var audio=new Audio("./sounds/crash.mp3");
    audio.play();
        
        break;
    case "d":
    var audio=new Audio("./sounds/kick-bass.mp3");
    audio.play();
        break;
        
     case "f":   
     var audio=new Audio("./sounds/snare.mp3")
    audio.play();
       break;

    case "g":
    var audio=new Audio("./sounds/tom-1.mp3")
    audio.play();
        break;

     case "h":
    var audio=new Audio("./sounds/tom-2.mp3")
    audio.play();
        break;

    case "j":
     var audio=new Audio("./sounds/tom-3.mp3")
     audio.play();
            break;

    case "k":
    var audio=new Audio("./sounds/tom-4.mp3")
     audio.play();    
        break;


    default:
  }
}  