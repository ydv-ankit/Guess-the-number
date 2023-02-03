var n = prompt("What's your name?")
var btn = document.getElementsByTagName('button')[0]
var div = document.getElementsByClassName('container')[0]
var inp = document.getElementsByTagName('input')[0]

var random = genRan()
var a = document.createElement('h5')

a.setAttribute('id','wonText')

var b = document.getElementById('btn');

inp.after(a)
a.hidden = true

var gameCount = 0;

var lifeLine = document.getElementById('lives')
lifeLine.innerHTML = 3-gameCount;

function genRan(){
    return Math.floor(Math.random() * 10);
}

function check() {
    console.log(gameCount)
    a.hidden = false
    lifeLine.innerHTML = 3-gameCount;
    var num = parseInt(inp.value)
    a.style.animation = 'none';
    if(num=='') {
        return;
    }
    gameCount += 1
    if(gameCount>3){
        inp.hidden = true
        a.innerHTML = `You LOST !! ${n}`;
        b.innerHTML = "Try again"
        lifeLine.parentElement.hidden = true 
        b.setAttribute('onclick','repaint()')
        b.focus()
        return;
    }
    else if(num == random){
        inp.hidden = true
        a.innerHTML = "You won"
        b.innerHTML = 'Play again'
        b.setAttribute('onclick','repaint()')
        btn.focus()
        lifeLine.innerHTML = 'no worries'
        return
    }
    else{
        a.innerHTML = 'Try again'
        inp.focus()
        inp.select()
        lifeLine.innerHTML = 3 - gameCount
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
    lifeLine.parentElement.hidden = false
    lifeLine.innerHTML = 3 - gameCount;
    inp.focus()
}

window.onreset = repaint()

console.log(random)