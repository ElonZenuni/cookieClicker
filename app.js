const button = document.getElementById('cookie');
const reset = document.getElementById('reset-button');
const double = document.getElementById('double-button');
const grandma = document.getElementById('grandma');
const grandma2 = document.getElementById('grandma2');
let buttonState = false;
let grandmaMode = false;
let cookies = 0;

button.addEventListener("click", doSomething);
reset.addEventListener("click", resetButton);
double.addEventListener("click", doubleUp); // ✅ Just this one
grandma.addEventListener("click", grandma1);
grandma2.addEventListener("click", grandma2Function);

function doSomething(event) {
    cookies += getClickValue();
    document.getElementById('counter').textContent = cookies;
    spawnMiniCookie(event);

    const clickSound = document.getElementById('click-sound');
    clickSound.currentTime = 0; // rewind to start
    clickSound.play(); // play the sound

    setTimeout(() => {
        newSound.pause();
        newSound.remove(); // clean up to avoid memory buildup
    }, 1000);
}

function resetButton() {
    cookies = 0;
    document.getElementById('counter').textContent = cookies;
}

function spawnMiniCookie(event) {
    const mini = document.createElement('div');
    mini.classList.add('mini-cookie');
    mini.style.left = event.clientX + 'px';
    mini.style.top = event.clientY + 'px';
    document.body.appendChild(mini);
    setTimeout(() => mini.remove(), 1000);
}

function doubleUp() {
    buttonState = !buttonState;
    double.classList.toggle('active'); // 🔴 toggles the red background
    console.log("Double mode:", buttonState);
}

function getClickValue() {
    return buttonState ? 2 : 1;
}

let grandmaInterval;

function grandma1() {
    if (grandmaInterval) {
        clearInterval(grandmaInterval);
        grandmaInterval = null;
    } else {
        grandmaInterval = setInterval(() => {
            cookies++;
            document.getElementById('counter').textContent = cookies;

        }, 1000);
    }
    grandma.classList.toggle('active');
}

let grandma2Interval;

function grandma2Function() {
    if (grandma2Interval) {
        clearInterval(grandma2Interval);
        grandma2Interval = null;
    } else {
        grandma2Interval = setInterval(() => {
            cookies += 10;
            document.getElementById('counter').textContent = cookies;
        }, 1000);
    }
    grandma2.classList.toggle('active');
}



document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("name-input");
    const nameButton = document.getElementById("name-button");
    const nameHeading = document.getElementById("bakery-name");

    nameButton.addEventListener("click", () => {
        const name = nameInput.value.trim();
        if (name !== "") {
            nameHeading.textContent = `${name}'s Bakery`;
            // Optionally hide input after setting
            nameInput.style.display = "none";
            nameButton.style.display = "none";
        } else {
            alert("Please enter a valid name.");
        }
    });
});