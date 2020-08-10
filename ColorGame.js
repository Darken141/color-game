 
 var numSquares = 6;
 var colors = generateRandomColor(numSquares);

 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.getElementById("displayColor");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var easyBtn = document.querySelector("#easyBtn");
 var hardBtn = document.querySelector("#hardBtn");

 var pickedColor = pickColor();

 easyBtn.addEventListener("click", function()
 {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
 });

 hardBtn.addEventListener("click", function()
 {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }

 });

 resetButton.addEventListener("click", function()
 {
    colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    this.textContent = "New Color";
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
    }

    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
 })


 colorDisplay.textContent = pickedColor;

 for(var i = 0; i < squares.length; i++)
 {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function()
    {
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor)
        {
            messageDisplay.textContent = "Correct!";
            changeColor(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play again?";
        }
        else
        {
            messageDisplay.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
        }
        
    });
 };


 function changeColor(color)
 {
    for(var i = 0; i < squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
 };

 function pickColor()
 {
     var random = Math.floor(Math.random() * colors.length);
     return colors[random];
 }

 function generateRandomColor(num)
 {
    var arr = [];

    for(var i = 0; i < num; i++)
    {
        arr.push(randomColor());
    }

    return arr;


    // var result = "rgb(";
    // result += Math.floor(Math.random() * 256) + ", ";
    // result += Math.floor(Math.random() * 256) + ", "
    // result += Math.floor(Math.random() * 256) + ")";
    // return result;
 }

 function randomColor()
 {
    var r = Math.floor(Math.random() * 256);

    var g = Math.floor(Math.random() * 256);

    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

 }