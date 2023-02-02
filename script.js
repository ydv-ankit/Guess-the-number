var n = prompt("What's your name?")
var btn = document.getElementsByTagName('button')[0]
var div = document.getElementsByClassName('container')[0]
var inp = document.getElementsByTagName('input')[0]

inp.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && gameCount <= 3) {check()}
});

var random = genRan()
var a = document.createElement('h5')
a.innerHTML = ''
a.setAttribute('id','wonText')

var b = document.getElementById('btn');

// inp.focus()
inp.after(a)
a.hidden = true

var gameCount = 0;

function genRan(){
    return Math.floor(Math.random() * 10);
}

function check() {
    if(num=='') return;
    a.hidden = false
    if(gameCount>2){
        inp.hidden = true
        a.innerHTML = `You LOST !! ${n}`;
        b.innerHTML = "Try again"
        b.setAttribute('onclick','repaint()')
        b.focus()
        return;
    }
    var num = parseInt(inp.value)
    a.style.animation = 'none';
    if(num == random){
        inp.hidden = true
        a.innerHTML = "You won"
        b.innerHTML = 'Play again'
        b.setAttribute('onclick','repaint()')
        btn.focus()
        return
    }
    else{
        a.innerHTML = 'Try again'
        inp.focus()
        inp.select()
        gameCount += 1;
    }
    a.style.animation = 'shake 0.2s'
}

function repaint(){
    random = genRan()
    inp.hidden = false
    inp.value = ''
    b.innerHTML = "Check"
    b.setAttribute('onclick','check()')
    a.hidden = true
    gameCount = 0
}
