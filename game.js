
// NOTE: i wanted to use the "$()" sign instead of the "document.getElementById()" but i hesitated

    // the initial event listener holds the entire code because it was not allowing me to work with js the way i was used to.
    // with this code i was able to make sure i am able to work with the dom and still be able to get the code running.

document.addEventListener("DOMContentLoaded",function(e){
    var boundaries =[...document.querySelectorAll(".boundary")];//spreading the document with 3 dots and caling the all the "boundary class" divs into an array.
    var gameStarted =false; //initial status of the game
    var start = document.getElementById("start"); // start div
    var end = document.getElementById("end"); //end div
    var cursorInsideGame=false; //checking if the cursor is inside the scope of the game or not
    var status = document.getElementById("status"); //the var of the status
    var score=0; //the count that keeps score
    var count=3; //the count that keeps track of lives
    var gameContainer=document.getElementById("game"); //var for the div that holds the maze
    var ScoreBoard = document.getElementsByClassName("example");


    // the event listener that starts initiates the game 

    gameContainer.addEventListener("mouseenter",()=>{
        cursorInsideGame==true && gameStarted ==true;
    });

    gameContainer.addEventListener("mouseleave",()=>{
        cursorInsideGame=false;
        if (gameStarted==true){
        paintBoundariesRed(boundaries);
        status.innerHTML="game over";
        score-=10;
        count-=1;
        gameStarted==false;
        };
       
        
    });

    // the event listener that restarts the game
    
    start.addEventListener("click",()=>{
        location.reload();
    });

    // the event listener that starts the game 

    start.addEventListener("mouseenter",()=>{
        if (count>=0){
            status.innerHTML = " lets start the game ";
            gameStarted = true;
            paintboundariesBlack(boundaries);
        }
                  
        
        
    });

    // the end div and its functionality/eventlistener
    
    end.addEventListener("mouseenter",()=>{
        if (gameStarted==false) return;
        gameStarted = false;
        paintboundariesBlack(boundaries);
        score=+10;
                
        // status messages and the score board

        status.innerText = `congrats...soooo proud. ${score} points `;


    });

    // the for loop that takes all the classes of boundary and ads the event listener to them
    //the event ends the game 

    for ( boundary of boundaries){
        boundary.addEventListener("mouseenter",()=>{
            if (!gameStarted) return ;
            status.innerHTML = ` aww you lost man!!!! your score : ${score} , Start to continue. only ${count} lives left`;
            gameStarted=false;
            paintBoundariesRed(boundaries);
            count-=1;
        });
    };
});

// the function that paints the borders red

function paintBoundariesRed(boundaries){
    for ( boundary of boundaries){
        
        boundary.style.borderColor = "red";
       
    };
};

//the function that paints the boundaries black

function paintboundariesBlack(boundaries){
    for ( boundary of boundaries){
        boundary.style.borderColor = "black";
    };
};


