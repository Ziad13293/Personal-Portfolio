
document.getElementById('dont-click').addEventListener('click', function() {
    // Create audio elements ON CLICK (bypasses browser restrictions)
    const sounds = [
        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-funny-scream-2887.mp3'),
        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-funny-fart-2003.mp3')
    ];
    
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    
    // MUST be in this order: play() THEN alert()
    randomSound.play().catch(e => console.log("Browser blocked audio:", e));
    alert("I TOLD YOU NOT TO CLICK! ");
});


let clicks = 0;
document.getElementById('dont-click').addEventListener('click', function() {
    clicks++;
    const sounds = [
        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-funny-scream-2887.mp3'),
        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-funny-fart-2003.mp3'),
        new Audio('https://assets.mixkit.co/sfx/preview/mixkit-air-woosh-1536.mp3')
    ];
    
    const messages = [
        "I said DON'T! ",
        "Why are you like this? ",
        "OK fine, enjoy the chaos... "
    ];
    
    sounds[clicks % sounds.length].play();
    alert(messages[Math.min(clicks-1, messages.length-1)]);
    
    if (clicks >= 3) {
        this.textContent = "OK you win... CLICK MORE!";
    }
});


let votes = 0;
document.getElementById('vote-btn').addEventListener('click', function() {
  votes++;
  document.getElementById('vote-counter').textContent = 
    `${votes} ${votes === 1 ? 'person' : 'people'} already fell for my charm`;
  this.textContent = "THANK YOU! ";
});

console.log("%cLooking for hidden talents? You found one ! 😉", "color: purple; font-size: 20px");
