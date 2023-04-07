Thanks for taking the time to read this Ahmed!

I just wanted to talk about my struggles and discoveries during this project so
that you can get a better understanding of my thought process.

My main struggles and solutions:

1.  So my main struggle in this project was figuring out how I wanted to the temperature
    calculations from celcius to fahrenheit and then back to celcius. 
    
    I decided to use for loops to run through all of the .temp-high and .temp-low classNames
    because it was the easiest way to iterate through each tag and update them with new values.
    Please let me know if there is better way to do this, I had several solutions but found this
    one to automate the entire process the easiest.

2.  I also had to do some research and learned about the .replace() function. I had to
    use the .replace() function because parseInt() does not like the '°' symbol.

3.  Lastly, I couldn't come up with a different solution for my updateLocationName() function.
    I wanted to change the location display name in the top left of the header when you click 
    different locations on the nav bar. The way I ended up doing this felt a bit redundant so I wanted
    to know if you could think of a better solution.