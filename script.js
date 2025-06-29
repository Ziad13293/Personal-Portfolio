// Change header color when clicked
document.querySelector('header').addEventListener('click', function() {
    this.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});
// practival joke button
document.getElementById('dont-click').addEventListener('click', function() {
    alert("I TOLD YOU NOT TO CLICK!😂 Now go vote for me!");
});

let votes = 0;
document.getElementById('vote-btn').addEventListener('click', function() {
  votes++;
  document.getElementById('vote-counter').textContent = 
    `${votes} ${votes === 1 ? 'person' : 'people'} already fell for my charm`;
  this.textContent = "THANK YOU! ";
});

console.log("%cLooking for hidden talents? You found one ! 😉", "color: purple; font-size: 20px");

