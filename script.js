// JavaScript source code


//Model
var selectedDotIndex;
var selectedDotId;
var oldDotId;
var rt;
var startTime;
var finishTime;
var spentMs;
var spentS;
var isStarted;


// View
function updateView() {
    container = document.getElementById("container");

    size = 25;
    for (n = 0; n < size; n++) {
        var div = document.createElement('div');
        div.className = 'dot';
        div.id = 'dot' + parseInt(n + 1);
        container.appendChild(div); 
    }
}

//Controller

function startGame() {
    rt = Math.floor(2000 + Math.random() * 2500);
    document.getElementById("startbtn").disabled = true;
    isStarted = true
    setTimeout(randomTime, rt);

}
function randomTime() {
    rt = Math.floor(1500 + Math.random() * 2500);
    startTime = new Date().getTime();
    randomDot();
}
function dotClicked(id) {
    finishTime = new Date().getTime();
    document.getElementById(id).removeAttribute("onMouseOver", "dotClicked(this.id)");
    document.getElementById(id).classList.toggle('clicked')
    reactionTime();
}

function reactionTime(){
    spentMs = finishTime - startTime;
    console.log('You spent ' + spentMs + 'ms');

}

function randomDot() {
    if (oldDotId != null && isStarted) {
        var oldId = document.getElementById(oldDotId);
        oldId.classList.toggle('lightOn');
        oldId.removeAttribute("onMouseOver", "dotClicked(this.id)");
        if (oldId.classList.contains('clicked')) document.getElementById(oldDotId).classList.toggle('clicked');
    }

    selectedDotIndex = Math.ceil(Math.random() * 25);
    selectedDotId = 'dot' + selectedDotIndex;

    document.getElementById(selectedDotId).setAttribute("onMouseOver", "dotClicked(this.id)");
    document.getElementById(selectedDotId).classList.toggle('lightOn');
    
    oldDotId = selectedDotId;
    setTimeout(randomTime, rt);
}