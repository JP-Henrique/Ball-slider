const ball1 = document.getElementById("ball1");
const ball2 = document.getElementById("ball2");
const ball3 = document.getElementById("ball3");
const cont1 = document.querySelector(".cont1");
const cont2 = document.querySelector(".cont2");
const cont3 = document.querySelector(".cont3");

ball1.addEventListener('click', blockBall1);
ball2.addEventListener('click', blockBall2);
ball3.addEventListener('click', blockBall3);

function blockBall1() {
    cont1.classList.add("block");
    cont2.classList.remove("block");
    cont3.classList.remove("block");
}

function blockBall2() {
    cont2.classList.add("block");
    cont1.classList.remove("block");
    cont3.classList.remove("block");
}

function blockBall3() {
    cont3.classList.add("block");
    cont1.classList.remove("block");
    cont2.classList.remove("block");
}


