// Play drum by keyboard press
window.addEventListener("keydown", playSound);

function playSound(e) {
    // console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stop the function running all together

    audio.currentTime = 0; // rewind to the start
    audio.play();
    
    
    if (!key) return;
    key.classList.add('playing')

}


// Remove .playing class after transition action over
function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener("transitionend", removeTransition))


// Play music by mouse click
keys.forEach((key) => { key.addEventListener("click", playUsingMouse) });

function playUsingMouse(e) {
    const keycode = (this.getAttribute("data-key")); 
     const audio = document.querySelector(`audio[data-key="${keycode}"]`);

    if (!audio) return; //stop the function running all together

    audio.currentTime = 0; // rewind to the start
    audio.play();
    this.classList.add('playing')

}


