//Variable for set time in seconds
let customSetTime = 0;
//Variable for minute, second and millisecond time in seconds
let minuteTime = 0;
let secondTime = 0;
let millisecondTime = 100;
//let minuteTimeOverall = 0;
//let secondTimeOverall = 0;
let minutePassed = 0;

let minuteHand =0;
let secondHand =0;

//default time for minute and second
const defaultMinute = 4;
const defaultSecond = 0;
const defaultMilisecond = 0;
const defaultIntervalCounter = 30;
//array to check for 3,2,1 transition
//3 second as the beep last for 4 counts so it transit to next block
const countdownSound = [3,33];
const transitionSound = [13,43];
//array to store rest and work period timing
const workPeriod = [0,30,60];
const restPeriod = [10,40];

//array for number of 30 second block
let timeBlockArray;
let counter = 0;
let currentCount = 30;
//variable for set interval
let startTimeCounter;
let startMilliTimeCounter;
//variable for button clicked or not
let isClicked = false;
let started = true;
//to control increasing time
let state = true;

//create audio object here
let audio = new Audio('./Sound/beep-sound.wav');

 
// document.getElementsByClassName('arrow').addEventListener(unhover, unhover(element));

//default start up settings
document.getElementById("min").innerText = padZero(defaultMinute);
document.getElementById("sec").innerText = padZero(defaultSecond);
document.getElementById("mili").innerText = padZero(defaultMilisecond);

document.getElementById("formin").innerText = padZero(defaultSecond);
document.getElementById("forsec").innerText = padZero(defaultIntervalCounter);
document.getElementById("formili").innerText = padZero(defaultMilisecond);

resetTime();

//for picture change effect
document.getElementById("uparrowmin").addEventListener('mouseover',hoverIncreaseMin);
document.getElementById("uparrowmin").addEventListener('mouseleave',unhoverIncreaseMin);
document.getElementById("uparrowsec").addEventListener('mouseover',hoverIncreaseSec);
document.getElementById("uparrowsec").addEventListener('mouseleave',unhoverIncreaseSec);

document.getElementById("downarrowmin").addEventListener('mouseover',hoverDecreaseMin);
document.getElementById("downarrowmin").addEventListener('mouseleave',unhoverDecreaseMin);
document.getElementById("downarrowsec").addEventListener('mouseover',hoverDecreaseSec);
document.getElementById("downarrowsec").addEventListener('mouseleave',unhoverDecreaseSec);

function calculateSetTime(){
    //console.log to troubleshoot showing can get value in
    //console.log(typeof (document.getElementById("minutelabel").value));

    //*60 to convert to seconds
    initialTime();

    //set the string in place
    // if(minuteTime !==0 || secondTime !==0){
    //     calculateBlocksOfTime();
    // }
    calculateBlocksOfTime();

     //After calculating the blocks and the seconds needed we need to update the label to print correct time
     document.getElementById("forsec").innerText = padZero(timeBlockArray[counter]);
            
     //printing by label
     document.getElementById("min").innerText = padZero(minuteHand);
     document.getElementById("mili").innerText = padZero(defaultMilisecond);
     document.getElementById("formili").innerText = padZero(defaultMilisecond);
     if(secondHand === 60){
        document.getElementById("sec").innerText = padZero(defaultSecond);
     }else{
        document.getElementById("sec").innerText = padZero(secondHand);
     }
     

}

function initialTime(){
    // minuteTime = parseInt(document.getElementById("minutelabel").value) * 60;
    // secondTime = parseInt(document.getElementById("secondlabel").value);

    minuteHand = parseInt(document.getElementById("minutelabel").value) * 60;
    secondHand = parseInt(document.getElementById("secondlabel").value);
    
    // customSetTime = minuteTime+secondTime;
    customSetTime = minuteHand+secondHand;
    console.log('The time set is:',minuteTime+secondTime);
}

function calculateBlocksOfTime(){
    
    // if(minuteTime ===0 && secondTime === 0 ){
    //     customSetTime = minuteHand+secondHand;
    // }else{
    //     customSetTime = minuteTime+secondTime;
    // }
    
    //set the counting block
    // thirtySecondBlock = customSetTime/30;
    // timeBlockArray = new Array(thirtySecondBlock);
    // //troubleshooting for number of blocks
    // //console.log(timeBlockArray);
    // for(let i =0; i<timeBlockArray.length; i++){
    //     timeBlockArray[i] = 30;
    // }
    // console.log(timeBlockArray);
    // counter = timeBlockArray.length-1;

    // //minutehand varaiable to calculate the minutes based on the array block
    // minuteHand = parseInt(timeBlockArray.length/2);
    // //mod it for remainder to get the seconds portion
    // secondHand = timeBlockArray.length % 2;
    // console.log(secondHand);
    // console.log(started);
    // if(timeBlockArray.length % 2 > 0){
    //     secondHand = 30;//30;
    // }else{
    //     secondHand = 60;//60;
    // }
    
    if(customSetTime ===0){
        thirtySecondBlock = 0;
        counter = 0;
        //document.getElementById("forsec").innerText = padZero(timeBlockArray[0]);
    }else{
        thirtySecondBlock = customSetTime/30;
        timeBlockArray = new Array(thirtySecondBlock);
        //troubleshooting for number of blocks
        //console.log(timeBlockArray);
        for(let i =0; i<timeBlockArray.length; i++){
            timeBlockArray[i] = 30;
        }
        console.log(timeBlockArray);
        counter = timeBlockArray.length-1;

        //minutehand varaiable to calculate the minutes based on the array block
        minuteHand = parseInt(timeBlockArray.length/2);
        //mod it for remainder to get the seconds portion
        secondHand = timeBlockArray.length % 2;
        console.log(secondHand);
        console.log(started);
        if(timeBlockArray.length % 2 > 0){
            secondHand = 30;//30;
        }else{
            secondHand = 60;//60;
        }
    }
    
    millisecondTime=0;

    isClicked = false;
    started = true;
    state = true;
    clearInterval(startTimeCounter);
    clearInterval(startMilliTimeCounter);
    

}

function startTime(){
    //isClicked variable to check if the button is clicked
    //testing audio.play();
    isClicked = true;
    audio.src = './Sound/beep-start.mp4';
    audio.play();
    //another timer for millisecond
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
            clearInterval(startMilliTimeCounter);
            resetTime();
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
        // if(minuteHand !== 0){
        //     if(minutePassed === 60){
        //         //console.log('in here');
        //         if(minuteHand === 0){
        //             minuteHand=0;
        //         }else{
        //             //console.log('in here');
        //             minuteHand--;
        //             secondHand = 60;
        //             minutePassed = 0;
        //         } 
        //     }
        // }
        
        //This if condition checks if the seconds has counted down to zero
        //if reach 0 then reset the countdown second clock back to 60
        //if reach 60 set the count up minute variable to 0;

        if(secondHand === 0){  
            
            //This if condition checks if minute and seconds equals to 0. means Timer has ended
            if(minuteHand === 0){
                //end as minute =0 and seconds = 0
                document.getElementById("mili").innerText = padZero(defaultMilisecond);
                document.getElementById("formili").innerText = padZero(defaultMilisecond);

                audio.src = './Sound/clockover.mp3';
                audio.play();
                
                // clearInterval(startTimeCounter);
                // clearInterval(startMilliTimeCounter);
                
                resetTime();
                
            }
            else{
                //This else clause resets the second counter back to 60 after it reaches 0
                //resets the minute counter back to 0 after it reaches 60
                //might not even need minutepassed
                //minuteHand--;
                secondHand = 60;

                minutePassed = 0;
                //console.log('passed here');
                
            }

            
        }else if(secondHand === 60){//This if condition checks for the moment we press start
            //Once we know that it has started, let the interval go through the other conditions and ignore this
            //console.log('entered');
            if(started){
                minuteHand--;
                secondHand--;

                timeBlockArray[counter]--;
                started = false;
                
                //console.log('in if block');
                //console.log(secondHand);
            }
            // else{
            //     console.log('in else block');
            //     console.log(secondHand);
            // }
               
        }

        // if(minuteHand ===0 && secondHand === 1){
        //     audio.src = './Sound/clockover.mp3';
        //     audio.play();
        // }
        //This section of if else clause checks if the second counter has been reset to 60 and display the correct
        //format of time. It then correct the minutehand as 1 minute has passed by decreasing it by 1
        //When second counter is not reset to 60, we display the time as per normal for the minute and second
        //30 second countdown counter and the total minute and seconds left

        if(secondHand === 60){
            //printing by label
            document.getElementById("min").innerText = padZero(minuteHand);
            document.getElementById("sec").innerText = padZero(defaultSecond);
             
            document.getElementById("forsec").innerText = padZero(timeBlockArray[counter]);  
            minuteHand--; 
        }else{
            
            document.getElementById("forsec").innerText = padZero(timeBlockArray[counter]);
            
            //printing by label
            document.getElementById("min").innerText = padZero(minuteHand);
            document.getElementById("sec").innerText = padZero(secondHand);            
        }

        //This section of if else is to check the timing block
        //if it is in the working range, display yellow and if it is in the rest range, display red
        //Using array.includes here to check if the timing exist in the array
        if(workPeriod.includes(secondHand)) {
            document.getElementById("thirtysecondtimedisplay").style.backgroundColor = 'yellow';
        }else if(restPeriod.includes(secondHand)){
            document.getElementById("thirtysecondtimedisplay").style.backgroundColor = 'red';
        }

        //This section checks for the counter when it has 3 seconds left and plays a beep
        
        if(countdownSound.includes(secondHand)){    
            audio.src = './Sound/321go.mp3';
            audio.play();
        }

        if(transitionSound.includes(secondHand)){
            audio.src = './Sound/beep-sound.wav';
            audio.play();
        }

        //This tracks the current count
        //in the event the stop button is pressed, we have a record
        currentCount =timeBlockArray[counter];
        //This count down the 30 second block
        timeBlockArray[counter]--;
        //console.log(minutePassed);
        console.log(secondHand, minutePassed, secondHand+minutePassed);
        //counter for second countdown and minute count up
        //might not even need minutepassed
        secondHand--;
        minutePassed++;     
    }
        
}

function stopTime(){
    
    currentCount = timeBlockArray[counter];
    isClicked = false;
    
    clearInterval(startTimeCounter);
    clearInterval(startMilliTimeCounter);
}

function resetTime(){
    if(!started){
        audio.src = './Sound/clockover.mp3';
        audio.play();
    }
    
    document.getElementById("thirtysecondtimedisplay").style.backgroundColor = 'yellow';
    isClicked = false;
    started = true;
    state = true;
    minutePassed = 0;
    
   
    document.getElementById("minutelabel").value=defaultSecond;
    document.getElementById("secondlabel").value=defaultSecond;
    
    //initialTime();

    minuteHand = defaultMinute;
    secondHand = defaultSecond;
    customSetTime = defaultMinute*60;

    calculateBlocksOfTime();
    console.log('The time set is:',customSetTime);

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


function increaseMinute(){
    //this function increases the minutehand value
    minuteHand++;
    
    showTime();
    customSetTime = minuteHand+secondHand;
}

function increaseSeconds(){
    
    //this if is to catch the initial value as there is default value set
    if(secondHand === 60){
        if(state){
            //minuteHand++;
            secondHand =0;
            state = false;
            secondHand+=30;
            console.log('in exception here');
        }else{
            minuteHand++;
            secondHand = 0;
            console.log('in here');
        }
    }else{//else if its not inital default value add the seconds in to tabulate whether it crosses a minute
        //if it does then reset the counter to zero
        secondHand+=30;
        if(secondHand === 60){
            minuteHand++;
            secondHand = 0;
        }
    }   
    console.log(secondHand);
    
    showTime();
    customSetTime = minuteHand+secondHand;
}

function decreaseMinute(){
    //this if else clause checks the minutehand and decrease it if it is no 0
    if(minuteHand === 0){
        minuteHand = 0;
        secondHand = 0;
    }else{
        minuteHand--;
    }
    
    showTime();
    customSetTime = minuteHand+secondHand;
}

function decreaseSeconds(){
 
    //This if else clause checks if the second hand is equal to 0 
    //if the second hand is equal to 0, we check if the minute hand is not equal 0
    //if it is not equal to 0, we minus the value of minute hand and reset the second hand counter
    if(secondHand === 0){

        if(minuteHand !== 0){
            minuteHand--;
            secondHand =60;
        }

    }else if(secondHand === 60){
        if(minuteHand === 0){
            minuteHand = 0;
            secondHand = 0;
        }else{
            minuteHand--;
        } 
    }

    if(secondHand === 0 && minuteHand === 0){
        minuteHand =0;
        secondHand = 0;
    }else{
        secondHand-=30;
    }
    
    
    showTime();
    customSetTime = minuteHand+secondHand;
}

function showTime(){
    if(secondHand === 60){
        //printing by label
        document.getElementById("min").innerText = padZero(minuteHand);
        document.getElementById("sec").innerText = padZero(defaultSecond);
         
        document.getElementById("forsec").innerText = padZero(timeBlockArray[counter]);  
    }else{
        
        document.getElementById("forsec").innerText = padZero(timeBlockArray[counter]);
        
        //printing by label
        document.getElementById("min").innerText = padZero(minuteHand);
        document.getElementById("sec").innerText = padZero(secondHand);            
    } 
}

function hoverIncreaseMin() {
    this.src= './Pictures/uparrowwhite.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("incMin").style.backgroundColor = 'black';
}
  
  function unhoverIncreaseMin() {
    this.src= './Pictures/up arrow.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("incMin").style.backgroundColor = 'white';
  }

  function hoverIncreaseSec() {
    this.src= './Pictures/uparrowwhite.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("incSec").style.backgroundColor = 'black';
}
  
  function unhoverIncreaseSec() {
    this.src= './Pictures/up arrow.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("incSec").style.backgroundColor = 'white';
  }

  function hoverDecreaseMin() {
    this.src= './Pictures/downarrowwhite.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("decMin").style.backgroundColor = 'black';
}
  
  function unhoverDecreaseMin() {
    this.src= './Pictures/down arrow.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("decMin").style.backgroundColor = 'white';
  }

  function hoverDecreaseSec() {
    this.src= './Pictures/downarrowwhite.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("decSec").style.backgroundColor = 'black';
}
  
  function unhoverDecreaseSec() {
    this.src= './Pictures/down arrow.png';
    this.width ='4vw';
    this.height= '4vh';
    document.getElementById("decSec").style.backgroundColor = 'white';
  }
  
  

