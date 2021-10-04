let firstCard;
let secondCard;
let sum;
let message = "";
let card_arr;
let messageEl = document.getElementById("message_el"); 
let sumEl = document.getElementById("sum-el")
let cards = document.getElementById("cards")
const button = document.querySelector('button')

function get_random_number(){
    return Math.floor(Math.random() * (11 - 1) + 1);
}

function renderGame(){
    if(sum <= 20){
        message = "Do you want to draw a new card ?"
        messageEl.textContent = message;
        sumEl.textContent = sum;
        cards.textContent = "";
        for (let i = 0; i < card_arr.length; i++){
            cards.textContent += card_arr[i] + " ";
        }
    }
    else if(sum === 21){
        message = "You have Blackjack."
        messageEl.textContent = message;
        sumEl.textContent = "Sum: " + sum;
        cards.textContent = "";
        for (let i = 0; i < card_arr.length; i++){
            cards.textContent += card_arr[i] + " ";
        }
        button.disabled = true;
        setTimeout(startGame, 5000);
        button.disabled = false;
    }
    else{
        message = "You are out of the game."
        messageEl.textContent = message;
        sumEl.textContent = sum;
        cards.textContent = "";
        for (let i = 0; i < card_arr.length; i++){
            cards.textContent += card_arr[i] + " ";
        }
        button.disabled = true;
        setTimeout(startGame, 5000);
        button.disabled = false;
    }
}

function startGame(){
    firstCard = get_random_number();
    secondCard = get_random_number();
    sum = firstCard + secondCard;
    message = "";
    card_arr = ["Cards: ", firstCard, secondCard];
    renderGame();
}

function newCard(){
    let new_card = Math.floor(Math.random() * (11 - 1) + 1);
    sum += new_card;
    card_arr.push(new_card);
    renderGame();
}