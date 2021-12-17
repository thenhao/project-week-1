# Project Week 1

## Brief
This project will be a tabatha timer which will allow the user to input the time that they want. They will then set the time, start, stop or reset the time if they need to. A MVP will be done up to ensure that the basic functionality are present before doing up the additional features.

### Basic functionality includes:
-Display minute, seconds, milliseconds
-set time, start time, stop time, reset time

### Additional features
-TBC


### overview of plan for 3 areas:
HTML:
Time panel:
Div to house time panel
Div for time panel
Div for displaying and input time for minute(element might change)
Label for display ?
Div for displaying input time for seconds(element might change)
Div for displaying input time for milliseconds(element might change)

Button panel:
Div to house the buttons
Button for start time
Button for stop time
Button for set time
Button for reset time



CSS:
Flex to house the panels ? then alter the padding and margin after
Time panel:
Color for div for housing the time panel, border maybe, positioning of the element
Color for div for time panel, border maybe, positioning of the element
Color for div for the display of minute time(element might change) , positioning of the element
Color for div for the display of seconds time(element might change) , positioning of the element
Color for div for the display of milliseconds time(element might change) , positioning of the element

Color for div for housing the button panel, border maybe, positioning of the element
Color for start time button, positioning of the element
Color for stop time button, positioning of the element
Color for set time button, positioning of the element
Color for reset time button, positioning of the element



JS:
Calculate and translate the time to be displayed in minute
Calculate and translate the time to be displayed in seconds
Calculate and translate the time to be displayed in milliseconds
Might need an object to house the calculation and translation
setInterval(,1000) for seconds and minutes
setInterval(,10)- for milliseconds, show only first 2 digits. Time need to check
https://www.py4u.net/discuss/276938
http://sstut.com/javascript/convert-hours-minutes-seconds-to-milliseconds.php
if use text area to input the text, need to do validation check for correct input from user

addeventListener to start time button to start the countdown
addeventListener to stop time button to pause the countdown
addeventListener to set time button to fix the total time
addeventListener to reset time button to reset the time to 0
