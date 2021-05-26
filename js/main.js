
setInterval(() => {
    const seconds = new Date()
    let secondsUnix = Math.round(seconds.getTime()/1000)
    const horaUnix = document.getElementById("horaUnix")
    horaUnix.innerText = secondsUnix
}, 1000)

const info = document.getElementById("info")
const git = document.getElementById("git")
const footer = document.getElementById("footer")

setTimeout(function () {
    info.innerText = `Unix time is a system for describing a point in time.It is the number of seconds that have elapsed since the Unix epoch, minus leap seconds; the
    Unix epoch is 00: 00: 00 UTC on 1 January 1970.`

    git.innerHTML = `<a href="https://github.com/Bescri"><i class="fab fa-github wow animate__fadeIn" style="animation-duration: 3s; color: black;" </i></a>`
    footer.innerText = `<> with 🖤 by Bastián Escribano`
}, 1000);

const pie = document.getElementById("footer")
const mode = document.getElementById("row1")
const lenguage = document.getElementById("row2")
const todo = document.body;
let op = 0;
let ol = 0;
lenguage.onclick = () =>{
    if (ol == 0){
        info.innerText = `Tiempo Unix o Tiempo POSIX es un sistema para la descripción de instantes de tiempo: se define como la cantidad de segundos transcurridos desde la medianoche UTC del 1 de enero de 1970.`
        lenguage.innerHTML = `
    <i class="far fa-flag"></i>
    <h2 class="fa-flag">Inglés</h2>
    `

        ol = 1;
    }

    else {
        info.innerText = `Unix time is a system for describing a point in time.It is the number of seconds that have elapsed since the Unix epoch, minus leap seconds; the
        Unix epoch is 00: 00: 00 UTC on 1 January 1970.`
    
    lenguage.innerHTML = `
    <i class="far fa-flag"></i>
    <h2 class="fa-flag">Spanish</h2>
    `

    ol = 0;
    }
}


mode.onclick = () => {
    todo.classList.toggle("darkMode")

    if (op == 0){
    git.innerHTML = `<a href="https://github.com/Bescri"><i class="fab fa-github wow animate__fadeIn" style="animation-duration: 3s; color: white;" </i></a>`
    pie.innerText = `<> with 🤍 by Bastián Escribano`
        mode.innerHTML = `<i class="far fa-sun"></i>
        <h2 class="fa-sun">Light</h2>`
    op = 1;
    }
    else{

        mode.innerHTML = `<i class="far fa-sun"></i>
        <h2 class="fa-sun">Dark</h2>`
    git.innerHTML = `<a href="https://github.com/Bescri"><i class="fab fa-github wow animate__fadeIn" style="animation-duration: 3s; color: black;" </i></a>`
    pie.innerText = `<> with 🖤 by Bastián Escribano`
    op = 0;
    }
}