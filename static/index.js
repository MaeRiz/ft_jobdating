let datingTime = 120
let intervalTime = 30

const startBtnElement = document.getElementById('start')
const timerElement = document.getElementById('timer')

let status = 'waiting'
let tour = 1
let timerSecond = datingTime
let timerInstance
let inChange = false

startBtnElement.addEventListener('click', () => {
    switch (status){
        case 'waiting':
            startBtnElement.textContent = 'Mettre en pause'
            status = 'started'
            timerInstance = setInterval(updateTimer, 1000)
            break
        case 'started':
            startBtnElement.textContent = 'Reprendre'
            status = 'paused'
            clearInterval(timerInstance)
            break
        case 'paused':
            startBtnElement.textContent = 'Mettre en pause'
            status = 'started'
            timerInstance = setInterval(updateTimer, 1000)
            break
    }
});

document.getElementById('pass').addEventListener('click', () => {
    timerSecond = 1
});

const updateTimer = () => {
    timerSecond--;
    const minutes = Math.floor(timerSecond / 60);
    const remainingSeconds = timerSecond % 60;
    timerElement.textContent = 
        String(minutes).padStart(2, '0') + ':' + 
        String(remainingSeconds).padStart(2, '0');
    if(timerSecond <= 0){
        if (!inChange) {
            timerSecond = intervalTime
            inChange = true
            document.getElementById('change').classList.remove('hidden')
        } else if (inChange) {
            timerSecond = datingTime
            inChange = false
            document.getElementById('change').classList.add('hidden')
            tour++
            document.getElementById('tour').textContent = 'Tour n°'+tour
        }
    }
}

document.getElementById('reset').addEventListener('click', () => {
    reset()
});

const reset = () => {
    clearInterval(timerInstance)
    timerInstance = null
    timerElement.textContent = '0:00'
    status = 'waiting'
    startBtnElement.textContent = 'Démarrer'
}



// Get the modal
var modal = document.getElementById("myModal");

document.getElementById("param").addEventListener('click', () => {
    document.getElementById("myModal").style.display = 'block'
});

document.getElementById("closeModal").addEventListener('click', () => {
  modal.style.display = "none";
})

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('save').addEventListener('click', () => {
    modal.style.display = "none";
    document.getElementById('title').textContent = document.getElementById('titleinput').value
    datingTime = document.getElementById('datingTime').value
    intervalTime = document.getElementById('changingTime').value
    timerSecond = datingTime

    const selfminutes = Math.floor(datingTime / 60);
    const selfremainingSeconds = datingTime % 60;
    timerElement.textContent = 
        String(selfminutes).padStart(2, '0') + ':' + 
        String(selfremainingSeconds).padStart(2, '0');
})