// var p1Button = document.getElementById("#p1")
// var p2Button = document.querySelector("p2")
// var h1 = document.querySelector ("h1")
// var p1Score = 0 


// p1Button.addEventListener("click", function (){
//     p1Score++;
//     console.log (p1Score)
//     h1.textContent = p1Score
// })
window.onload = function (){
    var btn1 = document.getElementById("p1")
    var btn2 = document.getElementById("p4")
    var numInput = document.querySelector ("input")
    var p = document.querySelector ("p")
    var resetButton = document.getElementById ("reset")
    var p1Display = document.querySelector ("#p1Display")
    var p2Display = document.querySelector ("#p2Display")
    var winningScoreDisplay = document.querySelector ("p span")
    var p1Score = 0
    var p2Score = 0
    var gameOver = false
    var winningScore = 5


    btn1.addEventListener('click', function(){
        if (!gameOver){
            p1Score++
            // console.log (p1Score)
            if (p1Score === winningScore){
                p1Display.classList.add("winner")
                gameOver = true
            }
            p1Display.textContent = p1Score
        }
    })
    btn2.addEventListener ("click", function(){
        if (!gameOver){
            p2Score++
            if (p2Score === winningScore){
                p2Display.classList.add("winner")
                gameOver = true
            }
            p2Display.innerHTML = p2Score
        }
    })

    resetButton.addEventListener ("click", function(){
        reset ()
        // p1Score = 0
        // p2Score = 0
        // p1Display.textContent = 0
        // p2Display.textContent = 0
        // p1Display.classList.remove("winner")
        // p2Display.classList.remove("winner")
    })

    function reset (){
        p1Score = 0
        p2Score = 0
        p1Display.textContent = 0
        p2Display.textContent = 0
        p1Display.classList.remove("winner")
        p2Display.classList.remove("winner")
    }

    numInput.addEventListener ("change", function(){
        winningScoreDisplay.textContent = this.value
        winningScore = Number (this.value)
        reset ()
    })
}