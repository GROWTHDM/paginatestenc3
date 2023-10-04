const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');


btn.addEventListener('click', () => {
    setTimeout(() => {
        container.classList.add('fade');

    }, 100);

    setTimeout(() => {
        container.style.display = 'none';
    }, 1000);

    setTimeout((e) => {
        container2.classList.add('active');
        container2.style.left = '50%';
        container2.style.opacity = '1'
        e.preventDefault();
    }, 1000);
    setTimeout( () => {
        btn2.disabled = false;
    }, )

});

btn2.addEventListener('click', () => {
    modal.style.display = "block";
    container2.classList.add('fade');
    container3.style.display = 'block';

    setTimeout( () => {
        move();
    }, 700)

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


})

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


function move() {

    let elem = document.getElementById("greenBar");
    const firstWait = document.getElementById('waitContainer');
    const hacker = document.querySelector('.hacker')
    let stepValue = 0;
    let id = setInterval(frame, 100);
    firstWait.style.display ='block';
    setTimeout(() => {
        firstWait.style.display = 'none';
    }, 12000)
    elem.style.animation = 'none';

    setTimeout( () => {
        hacker.innerHTML = "VERIFICANDO DEPÓSITO";
    }, 3000)

    setTimeout( () => {
        hacker.innerHTML = 'DEPÓSITO VERIFICADO'
    }, 5000)

    setTimeout( () => {
        hacker.innerHTML = 'GERADOR ATIVADO'
    }, 7000)

    setTimeout( () => {
        hacker.innerHTML = "GERADOR LIBERADO!"
    }, 10000)

    setTimeout( () => {
        window.open("https://ganhandocomapp.com/nc-botcaspx", "_self");
    }, 10500)

    function frame() {

        if (stepValue >= 100) {
            clearInterval(id);

        } else {
            elem.style.width = (stepValue + 1) + "%";
            elem.innerHTML = (stepValue + 1) + "%...";
            stepValue=(stepValue + 1);

        }
        btn.disabled = true;
    }

}

const accountCreated = "account_created: true";
const accountnotCreated = "account_created: false";

window.localStorage.setItem('true', accountCreated);
window.localStorage.setItem('false', accountnotCreated);
function enableIfTrue() {
        if (accountCreated === true){
            window.localStorage.getItem('true');
            btn2.disabled = false;
        } else{
            window.localStorage.getItem('false');
        }
}

enableIfTrue();

// let countdown = 60;
// let countdownTimer = null;
//
// function startCountdown(){
//     countdown--;
//     btn2.innerHTML = countdown + 's';
//     btn2.disabled = true;
//     if(countdown < 0){
//         finishCountdown()
//         btn2.disabled = false;
//     }
// }
//
// function finishCountdown(){
//     clearInterval(countdownTimer)
//     btn2.innerHTML = "AVANÇAR"
//     countdown = 60;
// }
