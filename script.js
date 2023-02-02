var n = prompt("What's your name?")
var btn = document.getElementsByTagName('button')[0]
var div = document.getElementsByClassName('container')[0]
var inp = document.getElementsByTagName('input')[0]

var random = genRan()
var a = document.createElement('h5')
a.innerHTML = ''
a.setAttribute('id','wonText')

var b = document.getElementById('btn');

// inp.focus()
inp.after(a)
a.hidden = true

var gameCount = 1;

var lifeLine = document.getElementById('lives')
lifeLine.innerHTML = 4-gameCount;

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
        console.log('executed below')
        return;
    }
    else if(gameCount>2){
        inp.hidden = true
        a.innerHTML = `You LOST !! ${n}`;
        b.innerHTML = "Try again"
        lifeLine.innerHTML -= gameCount
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
        gameCount += 1
        lifeLine.innerHTML -= gameCount
    }
    a.style.animation = 'shake 0.2s'

}

function repaint(){
    random = genRan()
    inp.hidden = false
    inp.value = null
    b.innerHTML = "Check"
    b.setAttribute('onclick','check()')
    a.hidden = true
    gameCount = 0
    lifeLine.innerHTML = 4-gameCount;
}
