function iniciarjuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}

function seleccionarMascotaJugador ( ) {
    let inputhipodoge = document.getElementById("hipodogue")
    let inputcapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")

    if (inputhipodoge.Checked) {
        alert("seleccionaste a hipodoge")
    } else if (inputcapipepo.Checked) {
        alert("seleccionaste a capipepo")
    }else if (inputratigueya.Checked) {
        alert("seleccionaste a ratigueya")
    }
}

window.addEventListener("load", iniciarjuego)
