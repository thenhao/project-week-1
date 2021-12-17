//Variable for set time in seconds
let customSetTime = 0;
//Variable for minute, second and millisecond time in seconds
let minuteTime = 0;
let secondTime =0;
let millisecondtime =0;
//array for number of 30 second block
let timeBlockArray;
let counter =0;
let currentCount = 0;
//variable for set interval
let startTimeCounter;

function calculateSetTime(){
    //console.log to troubleshoot showing can get value in
    //console.log(typeof (document.getElementById("minutelabel").value));

    //*60 to convert to seconds
    minuteTime = parseInt(document.getElementById("minutelabel").value) * 60;
    secondTime = parseInt(document.getElementById("secondlabel").value);
    customSetTime = minuteTime+secondTime;
    console.log('The time set is:',minuteTime+secondTime);

    //set the string in place
     document.getElementById("timeDisplay").innerText = minuteTime/60 +"min"+secondTime+"seconds";
    
     calculateBlocksOfTime();
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
}

function startTime(){
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

    document.getElementById("timeDisplay").innerText = timeBlockArray[counter];
    currentCount =timeBlockArray[counter];
    timeBlockArray[counter]--;  
}

function stopTime(){
    timeBlockArray[counter]= currentCount;
    clearInterval(startTimeCounter);
}

function resetTime(){
    document.getElementById("minutelabel").value=4;
    customSetTime = parseInt(document.getElementById("minutelabel").value) * 60;
    document.getElementById("secondlabel").value=0;
    calculateBlocksOfTime();
    clearInterval(startTimeCounter);
}

