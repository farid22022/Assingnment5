function play(){
    document.getElementById('home-screen-1').classList.add('hidden')
    document.getElementById('home-screen-2').classList.add('hidden')
    document.getElementById('home-screen-3').classList.add('hidden')
    document.getElementById('home-screen-6').classList.add('hidden')
}


let current_seat = 0;

let discount_new  = 0;
let discount_couple = 0;

let increase_seat = 0;

let total_cost = 0;

let seatsFilled = 0;

let before_cost = 0;

let seat_left = 40;

if (seat_left == 0) {
    const overFlow = document.getElementById('overflow');
    const h1 = document.createElement('h2');
    h1.innerText = 'Not Available';
    overFlow.append(h1);
}

function discount(){
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
    if (cuponText.value === 'Couple 20' && (current_seat == 4)) {
        total_cost = parseFloat(total_cost);
        let discount2  = .80 * total_cost;
        const grandPrice = document.getElementById('grand-price');
        grandPrice.innerText = discount2; // Set the grand total to the updated value
    }
    if (cuponText.value === 'Couple 20' && (current_seat == 2 || current_seat == 3)) {
        total_cost = parseFloat(total_cost);
        let disCountPrice1 = .80 * 1100;
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

    if (current_seat >= 1) {
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

function Next_page(){
    document.getElementById('Home-screen-1').classList.add('hidden');
    
}


function change_screen(){
    document.getElementById('home-screen-1').classList.add('hidden');
    document.getElementById('home-screen-2').classList.add('hidden');
    document.getElementById('home-screen-3').classList.add('hidden');
    document.getElementById('home-screen-4').classList.add('hidden');
    document.getElementById('home-screen-5').classList.add('hidden');
    document.getElementById('home-screen-6').classList.remove('hidden');
}

function Restart(){
    if(seat_left <=40){
        document.getElementById('home-screen-1').classList.remove('hidden')
        document.getElementById('home-screen-2').classList.remove('hidden')
        document.getElementById('home-screen-3').classList.remove('hidden')
        document.getElementById('home-screen-4').classList.remove('hidden')
        document.getElementById('home-screen-5').classList.remove('hidden')
        document.getElementById('home-screen-6').classList.remove('hidden')
    }
}

