const computerChoiceDisplay = document.getElementById
('computer -choice')
const userChoiceDisplay = document.getElementById
('user-Choice')
const resultDisplay = document.getElementById
('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoices=>possibleChoices.addEventListener('click',(e)=>{
    userChoice=e.target.id
    userChoiceDisplay.innerHTML= userChoice
    generateComputerChoice()

    }))
    function generateComputerChoice(){
        const randomNumber =Math.floor( Math.random()*3)
        console.log(randomNumber)

    }
