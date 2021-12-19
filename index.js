//Variable for set time in seconds
let customSetTime = 0;
//Variable for minute, second and millisecond time in seconds
let minuteTime = 0;
let secondTime =0;
let minuteTimeOverall = 0;
let secondTimeOverall = 0;
let minutePassed = 0;
// millisecond time ???
let minuteHand =0;
let secondHand =0;

//default time for minute and second
const defaultMinute = 4;
const defaultSecond =0;
//variable for new line
let newLine ="\n";
//array for number of 30 second block
let timeBlockArray;
let counter =0;
let currentCount = 0;
//variable for set interval
let startTimeCounter;
//variable for button clicked or not
let isClicked = false;

function calculateSetTime(){
    //console.log to troubleshoot showing can get value in
    //console.log(typeof (document.getElementById("minutelabel").value));

    //*60 to convert to seconds
    initialTime();

    //set the string in place
     document.getElementById("timeDisplay").innerText = minuteTime/60 +"min"+secondTime+"seconds";
    
     calculateBlocksOfTime();

     document.getElementById("timeDisplay").innerText = (minuteHand) +"min"+ (secondHand) +" seconds" +newLine+timeBlockArray[counter];
}

function initialTime(){
    minuteTime = parseInt(document.getElementById("minutelabel").value) * 60;
    secondTime = parseInt(document.getElementById("secondlabel").value);
    
    customSetTime = minuteTime+secondTime;
    console.log('The time set is:',minuteTime+secondTime);
}

function calculateBlocksOfTime(){
    //set the counting block
    thirtySecondBlock = customSetTime/30;
    timeBlockArray = new Array(thirtySecondBlock);
    //troubleshooting for number of blocks
    //console.log(timeBlockArray);
    for(let i =0; i<timeBlockArray.length; i++){
        timeBlockArray[i] = 30;
    }
    console.log(timeBlockArray);
    counter = timeBlockArray.length-1;
    secondTimeOverall = timeBlockArray[counter] + timeBlockArray[counter-1];
    minuteTimeOverall = minuteTime/60;

    //minutehand varaiable to calculate the minutes based on the array block
    minuteHand = parseInt(timeBlockArray.length/2);
    //mod it for remainder to get the seconds portion
    secondHand = timeBlockArray.length % 2;
    console.log(secondHand);
    if(timeBlockArray.length % 2 > 0){
        secondHand = 30;
    }else{
        secondHand = 60;
    }
}

function startTime(){
    //isClicked variable to check if the button is clicked
    isClicked = true;
    startTimeCounter = setInterval(tabathaCount,1000);
}

function tabathaCount(){   
    if(timeBlockArray[counter] === 0){
        
        if(counter === 0){
            document.getElementById("timeDisplay").innerText = timeBlockArray[counter];
            clearInterval(startTimeCounter);
        }else{
            counter--;  
        }
        
    }

    //need something for the full time counter to count down
    //document.getElementById("timeDisplay").innerText = minuteTime/60 +"min"+secondTime+"seconds" +newLine+timeBlockArray[counter];
    //currentCount =timeBlockArray[counter];
    //timeBlockArray[counter]--;  

    //https://stackoverflow.com/questions/2788191/how-to-check-whether-a-button-is-clicked-by-using-javascript
    //button clicked or not
    if(isClicked)
    {
        // if(minutePassed === 2 || minutePassed === 0){
        //     secondTimeOverall = timeBlockArray[counter] + timeBlockArray[counter-1];
        //     console.log(secondTimeOverall);
        // }else if(minutePassed === 1){
        //     secondTimeOverall = timeBlockArray[counter];
        //     console.log(secondTimeOverall);
        //     //console.log(counter);
        // }
        
        // if(secondTimeOverall === 60){
            
            
        //     //console.log('in here');
        //     // if((minuteTimeOverall) !== 0){

                
                
        //     // }else{
        //     //     clearInterval(startTimeCounter);
        //     // }
            
        // }else if(secondTimeOverall === 0){
        //     if(minutePassed ===0){
        //         minutePassed = 2;
        //     }else{
        //         minutePassed--;
        //     }
            
        // }else{

        //     if(secondTimeOverall === 59){
        //         minuteTimeOverall--;
        //     }
        //     document.getElementById("timeDisplay").innerText = (minuteTimeOverall) +"min"+(secondTimeOverall)+"seconds" +newLine+timeBlockArray[counter];
        // }

        //This if condition checks if 1 minute has passed
        if(minuteHand !== 0){
            if(minutePassed === 60){
            
                if(minuteHand === 0){
                    minuteHand=0;
                }else{
                    minuteHand--;
                    secondHand = 60;
                    minutePassed = 0;
                } 
            }
        }
        
        //This if condition checks if the seconds has counted down to zero
        if(secondHand === 0){
            if(minuteHand === 0){
                //end as minute =0 and seconds = 0
                clearInterval(startTimeCounter);
            }
            else{
                minuteHand--;
                secondHand = 60;//59 ? 60
                minutePassed = 0;
            }
        }else if(secondHand === 60){//This if condition checks for the transition to countdown from start or countdown when going over a minute
            minuteHand--;
            secondHand--;
            timeBlockArray[counter]--;
        }

        //This section displays the code before doing countdown work and countup tracking work
        //Added this if condition again to catch the 0 second anomaly
        //condition added for display of correctness and else clause functions just normally
        if(secondHand === 60){
            document.getElementById("timeDisplay").innerText = (minuteHand+1) +"min"+00+"seconds" +newLine+timeBlockArray[counter];
        }else{
            document.getElementById("timeDisplay").innerText = (minuteHand) +"min"+(secondHand)+"seconds" +newLine+timeBlockArray[counter];
        }
        currentCount =timeBlockArray[counter];
        timeBlockArray[counter]--;
        secondHand--;
        minutePassed++;
        console.log(minutePassed);
        
    }
        
}

function stopTime(){
    timeBlockArray[counter]= currentCount;
    isClicked = false;
    clearInterval(startTimeCounter);
}

function resetTime(){
    isClicked = false;
    document.getElementById("minutelabel").value=defaultMinute;
    document.getElementById("secondlabel").value=defaultSecond;
    
    initialTime();

    calculateBlocksOfTime();
    
    clearInterval(startTimeCounter);

    document.getElementById("timeDisplay").innerText = (minuteTimeOverall) +"min"+ (defaultSecond) +" seconds" +newLine+timeBlockArray[counter];
}

