document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded");
    console.log("JS is running");

    // Hide main content initially
    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "none";

    // PASSWORD FUNCTION
    window.checkPassword = function () {
        var pass = document.getElementById("passwordInput").value;

        if (pass === "1035") {
            document.getElementById("password-screen").style.display = "none";
            mainContent.style.display = "block";
        } else {
            document.getElementById("error").innerHTML = "Wrong Code 💔";
        }
    };

    // SCROLL FADE
    window.addEventListener("scroll", function () {
        document.querySelectorAll(".fade-in").forEach(el => {
            const position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    });

    // GRADUATION MUSIC
    const graduationSection = document.getElementById("graduation");
    const music = document.getElementById("gradMusic");

    if (music) {
        music.loop = true;
    }

    window.addEventListener("scroll", function () {
        if (!graduationSection) return;

        const rect = graduationSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const isVisible =
            rect.top < windowHeight * 0.6 &&
            rect.bottom > windowHeight * 0.4;

        if (isVisible) {
            if (music && music.paused) {
                music.play();
            }
        } else {
            if (music) {
                music.pause();
                music.currentTime = 0;
            }
        }
    });

    // GAME LOGIC
    let score = 0;
    const targetScore = 50;
    let gameInterval;
    let gameStarted = false;

    const gameArea = document.getElementById("game-area");
    const scoreDisplay = document.getElementById("score");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const isBad = Math.random() < 0.25;

        if (isBad) {
            heart.innerHTML = "❤️";
            heart.dataset.type = "bad";
        } else {
            heart.innerHTML = "🖤💙";
            heart.dataset.type = "good";
        }

        heart.style.left = Math.random() * 90 + "%";
        heart.style.top = "0px";

        heart.onclick = function () {
            if (heart.dataset.type === "good") {
                score += 10;
            } else {
                score -= 10;
            }

            scoreDisplay.innerText = score;
            heart.remove();

            if (score >= targetScore) {
                endGame();
            }
        };

        gameArea.appendChild(heart);

        let fall = setInterval(() => {
            let top = parseInt(heart.style.top);
            heart.style.top = top + 4 + "px";

            if (top > 380) {
                heart.remove();
                clearInterval(fall);
            }
        }, 20);
    }

    function startGame() {
        if (!gameStarted) {
            gameStarted = true;
            gameInterval = setInterval(createHeart, 1000);
        }
    }

    function endGame() {
        clearInterval(gameInterval);
        alert("You collected all my love 💙✨");
    }

    // BUTTON FUNCTION (important: attach to window)
    window.scrollToGame = function () {
        if (music) {
            music.pause();
            music.currentTime = 0;
        }

        document.getElementById("game").scrollIntoView({
            behavior: "smooth"
        });

        setTimeout(() => {
            startGame();
        }, 800);
    };

});
window.scrollToGame = function () {

    const gameSection = document.getElementById("game");

    gameSection.classList.add("show");

    setTimeout(() => {
        gameSection.scrollIntoView({
            behavior: "smooth"
        });
    }, 100);

    setTimeout(() => {
        startGame();
    }, 800);
};
function showLetter() {
    const overlay = document.querySelector(".overlay");

    overlay.innerHTML = `
        <div class="letter">
            <h2>Hey Milkuhh ❤️</h2>
            <p>
            Happy Birthday, Vidhya.  
            But to me, you'll always be my Milkuhh.
            <br><br>
            3 years. 1095 days.
            <br><br>
            I don't just love you.
            I choose you. Every single day. 💙
            </p>
        </div>
    `;
}
function endGame() {
    console.log("END GAME TRIGGERED");
    clearInterval(gameInterval);
}

function endGame() {
    clearInterval(gameInterval);

    // remove remaining hearts
    document.querySelectorAll(".heart").forEach(h => h.remove());

    // create overlay
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const envelope = document.createElement("div");
    envelope.className = "envelope";
    envelope.innerHTML = "💌";

    overlay.appendChild(envelope);
    document.body.appendChild(overlay);

    envelope.addEventListener("click", showLetter);
}
function endGame() {
    clearInterval(gameInterval);
    gameInterval = null;

    document.querySelectorAll(".heart").forEach(h => h.remove());

    const btn = document.getElementById("finalBtn");

    console.log("Button Found:", btn); // DEBUG

    if (btn) {
        btn.classList.add("show");
    }
}
function endGame() {
    clearInterval(gameInterval);

    document.querySelectorAll(".heart").forEach(h => h.remove());

    const overlay = document.getElementById("loveOverlay");
    overlay.classList.remove("hidden");
}
function showLetter() {
    const overlay = document.querySelector(".overlay");

    overlay.innerHTML = `
        <div class="letter">
            <h2>Hey Milkuhh ❤️</h2>
            <p>
            Happy Birthday, Vidhya.  
            But to me, you'll always be my Milkuhh.
            <br><br>
            3 years. 1095 days.
            <br><br>
            I don't just love you.
            I choose you. Every single day. 💙
            </p>
        </div>
    `;
}
const finalBtn = document.getElementById("finalBtn");

finalBtn.addEventListener("click", function () {

    // hide button
    finalBtn.style.display = "none";

    // create overlay
    const overlay = document.createElement("div");
    overlay.className = "overlay";

    const envelope = document.createElement("div");
    envelope.className = "envelope";
    envelope.innerHTML = "💌";

    overlay.appendChild(envelope);
    document.body.appendChild(overlay);

    envelope.addEventListener("click", showLetter);
});
