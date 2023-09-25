// for( var i=0;i<document.querySelectorAll(".drum").length;i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         alert("hi");
//     });
// }

// document.querySelector("button").addEventListener("click" ,function(){
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// });


for( var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //     if(this.innerHTML==='w'){
    //         var audio = new Audio("sounds/crash.mp3");
    // audio.play();
    //     }
    //     else if(this.innerHTML==='a'){
    //         var audio =new Audio("sounds/kick-bass.mp3")
    //     }
    //     else if(this.innerHTML==='a'){
    //         var audio =new Audio("sounds/kick-bass.mp3")
    //     }
    //     else if(this.innerHTML==='s'){
    //         var audio =new Audio("sounds/snare.mp3")
    //     }
    //     else if(this.innerHTML==='d'){
    //         var audio =new Audio("sounds/tom-1.mp3")
    //     }
    //     else if(this.innerHTML==='j'){
    //         var audio =new Audio("sounds/tom-2.mp3")
    //     }
    //     else if(this.innerHTML==='k'){
    //         var audio =new Audio("sounds/tom-3.mp3")
    //     }
    //     else if(this.innerHTML==='a'){
    //         var audio =new Audio("sounds/tom-4.mp3")
    //     }
        


       makesound(this.innerHTML);
       animation(this.innerHTML);

    });
};
    document.addEventListener("keypress" , function(event){
        makesound(event.key);
        animation(event.key);

    });
        
        function makesound(key){
            switch(key)
        {
            case 'w':var audio = new Audio("sounds/crash.mp3");
            audio.play();break;

            case 'a':var audio =new Audio("sounds/kick-bass.mp3");
            audio.play();break;
            case 's': var audio =new Audio("sounds/snare.mp3");
            audio.play();break;
            case 'd':var audio =new Audio("sounds/tom-1.mp3");
            audio.play();break;
            case 'j': var audio =new Audio("sounds/tom-2.mp3");
            audio.play();break;
            case 'k': var audio =new Audio("sounds/tom-3.mp3");
            audio.play();break;
            case 'l':var audio =new Audio("sounds/tom-4.mp3");
            audio.play();break;

             

        }
    }
    function animation(key){
         var activeButton = document.querySelector("."+key);

         activeButton.classList.add("pressed");

         setTimeout(function(){
            activeButton.classList.remove("pressed");
         },100)

    }
  
