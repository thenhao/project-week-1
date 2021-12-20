//Variable for set time in seconds
let customSetTime = 0;
//Variable for minute, second and millisecond time in seconds
let minuteTime = 0;
let secondTime = 0;
let millisecondTime = 100;
let minuteTimeOverall = 0;
let secondTimeOverall = 0;
let minutePassed = 0;
// millisecond time ???
let minuteHand =0;
let secondHand =0;

//default time for minute and second
const defaultMinute = 4;
const defaultSecond = 0;
const defaultMilisecond = 0;
const defaultIntervalCounter = 30;
//variable for new line
let newLine ="\n";
//array for number of 30 second block
let timeBlockArray;
let counter = 0;
let currentCount = 0;
//variable for set interval
let startTimeCounter;
let startMilliTimeCounter;
//variable for button clicked or not
let isClicked = false;
let started = false;


document.getElementById("min").innerText = padZero(defaultMinute);
document.getElementById("sec").innerText = padZero(defaultSecond);
document.getElementById("mili").innerText = padZero(defaultMilisecond);

document.getElementById("formin").innerText = padZero(defaultSecond);
document.getElementById("forsec").innerText = padZero(defaultIntervalCounter);
document.getElementById("formili").innerText = padZero(defaultMilisecond);

resetTime();

function calculateSetTime(){
    //console.log to troubleshoot showing can get value in
    //console.log(typeof (document.getElementById("minutelabel").value));

    //*60 to convert to seconds
    initialTime();

    //set the string in place
    
     calculateBlocksOfTime();



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
    //another timer for millisecond ? // for nice looking purpose
    startMilliTimeCounter = setInterval(millisecondShow,10);
    startTimeCounter = setInterval(tabathaCount,1000);
}

function millisecondShow(){
    //default value to countdown
    //default value to show as something else
    //hit 0 second time minus// however let the other timer handle
    if(millisecondTime === -1){
        millisecondTime = 100;
    }
    else if(millisecondTime === 100){
        millisecondTime--;
    }

    //tested with a label and it works.
    
    if(millisecondTime === 100){
        document.getElementById("mili").innerText = padZero(defaultMilisecond);
        document.getElementById("formili").innerText = padZero(defaultMilisecond);
    }
    else{
        document.getElementById("mili").innerText = padZero(millisecondTime);
        document.getElementById("formili").innerText = padZero(millisecondTime);
    }
    
    
    //console.log(millisecondTime);
    millisecondTime--;
}

function tabathaCount(){   
    if(timeBlockArray[counter] === 0){
        
        if(counter === 0){
            //document.getElementById("timeDisplay").innerText = timeBlockArray[counter];
            document.getElementById("forsec").innerText =padZero(defaultSecond);
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
                document.getElementById("mili").innerText = padZero(defaultMilisecond);
                document.getElementById("formili").innerText = padZero(defaultMilisecond);
                clearInterval(startTimeCounter);
                clearInterval(startMilliTimeCounter);
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
            //printing by label
            document.getElementById("min").innerText = (minuteHand+1);
            document.getElementById("sec").innerText = padZero(defaultSecond);      
        }else{
            
            document.getElementById("forsec").innerText = padZero(timeBlockArray[counter]);
            
            //printing by label
            document.getElementById("min").innerText = padZero(minuteHand);
            document.getElementById("sec").innerText = padZero(secondHand);            
        }

        //condition to check for changing colour
        //maybe can use array.includes here
        if(secondHand ===0 ||secondHand ===30 || secondHand ===60) {
            document.getElementById("thirtysecondtimedisplay").style.backgroundColor = 'yellow';
        }else if(secondHand === 10 || secondHand ===40){
            document.getElementById("thirtysecondtimedisplay").style.backgroundColor = 'red';
        }

        currentCount =timeBlockArray[counter];
        timeBlockArray[counter]--;
        secondHand--;
        minutePassed++;
        
        console.log(minutePassed);
        
    }
        
}

function stopTime(){
    
    currentCount = timeBlockArray[counter];
    isClicked = false;
    
    clearInterval(startTimeCounter);
    clearInterval(startMilliTimeCounter);
}

function resetTime(){
    isClicked = false;
    minutePassed = 0;
    document.getElementById("minutelabel").value=defaultMinute;
    document.getElementById("secondlabel").value=defaultSecond;
    
    initialTime();

    calculateBlocksOfTime();
    
    clearInterval(startTimeCounter);
    clearInterval(startMilliTimeCounter);

    //For the total time display
    document.getElementById("min").innerText = padZero(defaultMinute);
    document.getElementById("sec").innerText = padZero(defaultSecond);
    document.getElementById("mili").innerText = padZero(defaultMilisecond);

    //For the interval Counter
    document.getElementById("formin").innerText = padZero(defaultSecond);
    document.getElementById("forsec").innerText = padZero(defaultIntervalCounter);
    document.getElementById("formili").innerText = padZero(defaultMilisecond);

}


//https://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript/10073788
//padding zero in front
function padZero(number){
    let  str = number.toString();
    return str.padStart(2, "0");
}

