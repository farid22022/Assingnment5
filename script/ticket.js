// function play(){
//     // step:1 hide the home screen. To the screen add the class hidden to
//     // the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
    

//     // show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }


function handleKeyboardButtonPress(event){
    
    // const playerPressed = event.key;
    // // console.log('button pressed');
    // // console.log(playerPressed);
    
    // // get the expected to press
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // const currentAlphabet = currentAlphabetElement.innerText;
    // const expectedAlphabet = currentAlphabet.toLowerCase();
    // // console.log(playerPressed,expectedAlphabet);

    // if(playerPressed === expectedAlphabet){
    //     console.log('Right');
    //     const currentScore = getTextElementValueById('current-score');
    //     const updatedScore = currentScore+1;
    //     setTextElementValueById('current-score',updatedScore);


    //     //stop the game if pressed
    //     if(playerPressed ==='Escape'){
    //         gameOver();
    //     }

    //     //-------------------------------------------------
    //     // console.log('you have pressed correctly',expectedAlphabet);
    //     //update score
    //     //1. get the current score

    //     // const currentScoreElement = document.getElementById('current-score');
    //     // const currentScoreText = currentScoreElement.innerText;
    //     // const currentScore = parseInt(currentScoreText);
    //     // // console.log(currentScore);

    //     // //2. increase the score by 1
    //     // const newScore = currentScore+1;

    //     // //3. show the updated score
    //     // currentScoreElement.innerText = newScore;


    //     //start a new round
    //     removeBackgroundColorById(expectedAlphabet);
    //     continueGame();
    // }
    // else{
    //     // console.log('Wrong');


    //     const currentLife = getTextElementValueById('current-life');
    //     const updatedLife = currentLife - 1;
    //     setTextElementValueById('current-life',updatedLife);

    //     if(updatedLife === 0){
    //         gameOver();
    //     }

    //     //--------------------------------------------
    //     //step-1: get the current life number
    //     // const currentLifeElement = document.getElementById('current-life');
    //     // const currentLifeText = currentLifeElement.innerText;
    //     // const currentLife = parseInt(currentLifeText);
        

    //     //step-2:reduce the life count
    //     // const newLife = currentLife-1;
    //     // console.log(newLife,currentLife);

    //     //step-3:display the updated life count
    //     // currentAlphabetElement.innerText = newLife;
        
    // }
}
document.addEventListener('keyup',handleKeyboardButtonPress);

function continueGame(){
    // step-1: Generate a random alphabet
    // const alphabet = getRandomAlphabet();
    // // console.log('your alphabet',alphabet)

    // //set randomly generated alphabet to the screen (show it)
    // // console.log('your random alphabet ',alphabet);
    // const currentAlphabetElement = document.getElementById('current-alphabet');
    // currentAlphabetElement.innerText = alphabet;

    // //set background color 
    // setBackgroundById(alphabet);



}

function play(){
    //hide everything show only the playground
    hideElementById('home-screen-1');
    hideElementById('home-screen-2');
    hideElementById('home-screen-3');
    hideElementById('home-screen-4');
    // showElementById('play-ground');

    //reset the score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    //update final score 
    //1.get the final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);

    //clear the last selected alphabet highlighted
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}
let current_seat = 0;

let discount_new  = 0;
let discount_couple = 0;

let increase_seat = 0;

let total_cost = 0;

let seatsFilled = 0;

let before_cost = 0;

let seat_left = 40;



function discount1(){
    const cuponForCouple = document.getElementById('cupon-couple');
    const cuponForNew = document.getElementById('cupon-new');

    const cuponText = document.getElementById('cupon1');
    if (cuponText.value === 'NEW15' && (current_seat == 4)) {
        total_cost = parseFloat(total_cost);
        let discount2  = .85 * total_cost;
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = discount2; // Set the grand total to the updated value
    }
    if (cuponText.value === 'NEW15' && (current_seat == 2 || current_seat == 3)) {
        total_cost = parseFloat(total_cost);
        let disCountPrice1 = .85 * 1100;
        disCountPrice1 = disCountPrice1+550;
        
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = disCountPrice1; // Set the grand total to the updated value
    }
    
}
 


function pressSeat(button) {
    const seatId = button.id;
    console.log(seatId);
    const newSeat = document.getElementById('new-seat');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = seatId;
    const h2 = document.createElement('h1');
    h2.innerText = 'Economoy';
    const h3 = document.createElement('h1');
    h3.innerText = '550';
    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    div.classList.add('flex');
    div.classList.add('justify-around')
    div.classList.add('bg-[F7F8F8]')
    newSeat.appendChild(div);
    current_seat ++;
    increase_seat ++;
    seat_left--;
    
    
    total_cost+=550;
    before_cost+=550;

    
    const leftSeat = document.getElementById('total-seat');
    leftSeat.innerText = seat_left;

    console.log(total_cost);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = before_cost;
    const increaseSeat = document.getElementById('increase-seats');
    increaseSeat.innerText = increase_seat;

    

    
    setBackgroundById(seatId);
    seatsFilled++;
    console.log(seatsFilled);

    if (seatsFilled === 4 ) {
        disableAllSeats();
        // enable the input field
    }
    if(current_seat  >= 2){
        
        const applyButton = document.getElementById('cupon2');
        applyButton.disabled = false;
    
        // Enable the coupon input field
        const couponField = document.getElementById('cupon1');
        couponField.disabled = false; 
    }
    const phone = document.getElementById('phone');
    let phoneNumber = Number(phone);



    console.log(phoneNumber);

    if (current_seat >= 1 && phoneNumber > 1) {
        // If the conditions are met, enable the next button
        const btn = document.getElementById('next-btn');
        btn.disabled = false;
    }

}

function disableAllSeats() {
    const seatButtons = document.querySelectorAll('.btn');
    seatButtons.forEach(button => {
        if (!button.classList.contains('selected')) {
            button.disabled = true;
        }
    });
}

function setBackgroundById(seatId) {
    const button = document.getElementById(seatId);
    button.classList.add('selected');
    button.style.backgroundColor = 'green';
}

// Function to handle double-click event on seat buttons
function handleDoubleClick(button) {
    if (!button.classList.contains('selected')) {
        pressSeat(button);
    }
}

// Attach double-click event listeners to all seat buttons
const seatButtons = document.querySelectorAll('.btn');
seatButtons.forEach(button => {
    button.addEventListener('dblclick', function() {
        handleDoubleClick(button);
    });
});

// if (increase_seat >= 1) {
//     document.getElementById('next-btn').disabled = false;
// }


