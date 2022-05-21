document.addEventListener("DOMContentLoaded",function(e){
    var boundaries =[...document.querySelectorAll(".boundary")];//spreading the document with 3 dots
    var gameStarted =false;
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var cursorInsideGame=false;
    var status = document.getElementById("status");
    var score=0;

    var gameContainer=document.getElementById("game");
    gameContainer.addEventListener("mouseenter",()=>cursorInsideGame=true);
    gameContainer.addEventListener("mouseleave",()=>{
        cursorInsideGame=false;
        paintBoundariesRed(boundaries);
        status.innerHTML="game over";
        gameStarted=false;
        
    });

    start.addEventListener("mouseenter",()=>{
        status.innerHTML = " lets start the game ";
        gameStarted = true;

         paintboundariesBlack(boundaries);



    });

    end.addEventListener("mouseenter",()=>{
        status.innerHTML = "congrats...soooo proud.";
        gameStarted = false;
        paintboundariesBlack(boundaries);
    });
    for ( boundary of boundaries){
        boundary.addEventListener("mouseenter",()=>{
            if (!gameStarted) return ;
            status.innerHTML = " game over ";
            paintBoundariesRed(boundaries);
            gameStarted=false;
        })

    }

});

function paintBoundariesRed(boundaries){
    for ( boundary of boundaries){
       boundary.style.borderColor = "red";
        

    }

 
}

function paintboundariesBlack(boundaries){
    for ( boundary of boundaries){
    
        boundary.style.borderColor = "black";
    
    }

    

};
// window.addEventListener("mousemove",(e)=>{
//     mouse.x=e.clientX;
//     mouse.y=e.clientY;

// })

// class pointer{
//     constructor(initPos){
//         this.htmlElement = document.createElement("div");
//         this.htmlElement.id = "pointer";
//         this.htmlElement.style.top = `${initPos.y}px`; /*filling the style css element of if btn */
// 		this.htmlElement.style.left = `${initPos.x}px`;
//         this.htmlElement.style.width= "1px";

//     }
//     movePointer(x,y){
//         this.x=mouse.x;
//         this.y=mouse.y;
//     }

// } 

// function startGame(){
//     var statusMessage = document.getElementById("status");
//     var end = document.getElementById("end");
//     if (movingMouse=true)


//     var boundary = document.getElementsByClassName("boundary");
//     for (var i =0;i<=boundary.length;i++){

//     }
// function getPos(e){
//     x=e.clientX;
//     y=e.clientY;
//     cursor="Your Mouse Position Is : " + x + " and " + y ;
//     document.getElementById("displayArea").innerHTML=cursor
// }


            
        
    
        





   
// // // statusMessage.innerHTML="wow stil not working";
// // var move = ()=>{
// //     if (mouse.getPos()==boundary.getPos()){
// //         boundary.setAttribute("style","border-color=red");
// //     }
// // }


// // end.addEventListener("mouseover",function endGame(){

// // })

