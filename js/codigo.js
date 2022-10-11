
let ataqueJugador
let ataqueEnemigo
let sectionMensajes
let vidasJugador = 3
let vidasPC = 3

//funcion de iniciar el juego
function iniciarJuego(){
    //Esconder seccion de selecion de ataque
    let sectionSelAtk = document.getElementById('seleccionar-ataque')
    sectionSelAtk.style.display = 'none'
    //Esconder boton de reiniciar
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('btn_sel_mokepon')
    botonMascotaJugador.addEventListener('click', seleccionMascotaJugador)

    //botones de ataque
    let botonAgua = document.getElementById('btn_sel_atk_agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonFuego = document.getElementById('btn_sel_atk_fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonTierra = document.getElementById('btn_sel_atk_tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    // let botonAtkjugador = document.getElementById('muestra_atk_usuario')
    // botonAtkjugador.addEventListener('click', seleccionMascotaJugador)

    //Boton de reiniciar
    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener('click', reinciarJuego)
}


//funciion de seleccion de mokepon manual por el usuario
function seleccionMascotaJugador(){

    //MOSTRAR seccion de selecion de ataque
    let sectionSelAtk = document.getElementById('seleccionar-ataque')

    //Esconder seccion de selecion de seleccionar Mascota
    let sectionSelMokepon = document.getElementById('seleccionar-mascota')


    let sel_hipodoge = document.getElementById('hipodoge')
    let sel_capipepo = document.getElementById('capipepo')
    let sel_ratigueya = document.getElementById('ratigueya')
    let sel_langostelvis = document.getElementById('langostelvis')
    let sel_tucapalma = document.getElementById('tucapalma')
    let sel_pydos = document.getElementById('pydos')
    let mascotaJugador = document.getElementById('nombre_mokepon_usuario')
    let mostrarImgSelectedUser = document.getElementById('img_selected_user')



    if (sel_hipodoge.checked){
        mascotaJugador.innerHTML = 'Hipodoge'
        mostrarImgSelectedUser.src = '/assets/hipodoge.png'
        document.getElementById('card_selected_user').style.display = 'flex'
        sectionSelAtk.style.display = 'flex'
        sectionSelMokepon.style.display = 'none'
        seleccionMascotaEnemigo()
    }
    else if (sel_capipepo.checked){
        mascotaJugador.innerHTML = 'Capipepo'
        mostrarImgSelectedUser.src = '/assets/capipepo.png'
        document.getElementById('card_selected_user').style.display = 'flex'
        sectionSelAtk.style.display = 'flex'
        sectionSelMokepon.style.display = 'none'
        seleccionMascotaEnemigo()
    }
    else if (sel_ratigueya.checked){
        mascotaJugador.innerHTML = 'Ratigueya'
        mostrarImgSelectedUser.src = '/assets/ratigueya.png'
        document.getElementById('card_selected_user').style.display = 'flex'
        sectionSelAtk.style.display = 'flex'
        sectionSelMokepon.style.display = 'none'
        seleccionMascotaEnemigo()
        
    }
    else if (sel_langostelvis.checked){
        mascotaJugador.innerHTML = 'Langostelvis'
        mostrarImgSelectedUser.src = '/assets/langostelvis.webp'
        document.getElementById('card_selected_user').style.display = 'flex'
        sectionSelAtk.style.display = 'flex'
        sectionSelMokepon.style.display = 'none'
        seleccionMascotaEnemigo()
    }
    else if (sel_tucapalma.checked){
        mascotaJugador.innerHTML = 'Tucapalma'
        mostrarImgSelectedUser.src = '/assets/tucapalma.webp'
        document.getElementById('card_selected_user').style.display = 'flex'
        sectionSelAtk.style.display = 'flex'
        sectionSelMokepon.style.display = 'none'
        seleccionMascotaEnemigo()
    }
    else if (sel_pydos.checked){
        mascotaJugador.innerHTML = 'Pydos'
        mostrarImgSelectedUser.src = '/assets/pydos.png'
        document.getElementById('card_selected_user').style.display = 'flex'
        sectionSelAtk.style.display = 'flex'
        sectionSelMokepon.style.display = 'none'
        seleccionMascotaEnemigo()
    }
    else{
        alert('Debes seleccionar algun mokepon')
    }

    //llama la funcion para que el PC escoja una mascota aleatoria
    //seleccionMascotaEnemigo()
}


//funcion para seleccionar mascota aleatoria
function seleccionMascotaEnemigo(){
    let mascotaenemigo = aleatorio(1,6)
    let mostrarMascotaEnemigo = document.getElementById('nombre_mokepon_adversario')
    let mostrarImgSelectedPC = document.getElementById('img_selected_pc')

    if (mascotaenemigo==1){
        mostrarMascotaEnemigo.innerHTML = 'Hipogoge'
        mostrarImgSelectedPC.src = '/assets/hipodoge.png'
        document.getElementById('card_selected_pc').style.display = 'flex'
    }
    else if (mascotaenemigo==2){
        mostrarMascotaEnemigo.innerHTML = 'Capipepo'
        mostrarImgSelectedPC.src = '/assets/capipepo.png'
        document.getElementById('card_selected_pc').style.display = 'flex'
    }
    else if (mascotaenemigo==3){
        mostrarMascotaEnemigo.innerHTML = 'Ratigueya'
        mostrarImgSelectedPC.src = '/assets/ratigueya.png'
        document.getElementById('card_selected_pc').style.display = 'flex'
    }
    else if (mascotaenemigo==4){
        mostrarMascotaEnemigo.innerHTML = 'Langostelvis'
        mostrarImgSelectedPC.src = '/assets/langostelvis.webp'
        document.getElementById('card_selected_pc').style.display = 'flex'
    }
    else if (mascotaenemigo==5){
        mostrarMascotaEnemigo.innerHTML = 'Tucapalma'
        mostrarImgSelectedPC.src = '/assets/tucapalma.webp'
        document.getElementById('card_selected_pc').style.display = 'flex'
    }
    else if (mascotaenemigo==6){
        mostrarMascotaEnemigo.innerHTML = 'Pydos'
        mostrarImgSelectedPC.src = '/assets/pydos.png'
        document.getElementById('card_selected_pc').style.display = 'flex'
    }
}


//funciones para definir ataques del ususario
function ataqueAgua(){
    ataqueJugador='💧Agua'
    seleccionAtkEnemigo()
}
function ataqueFuego(){
    ataqueJugador='🔥Fuego'
    seleccionAtkEnemigo()
}
function ataqueTierra(){
    ataqueJugador='🌱Tierra'
    seleccionAtkEnemigo()
}


//seleccion aleatoria de atk enemigo
function seleccionAtkEnemigo(){
    let atkEnemigoAleatorio = aleatorio(1,3)

    if (atkEnemigoAleatorio==1){
        ataqueEnemigo = '💧Agua'
    }
    else if (atkEnemigoAleatorio==2){
        ataqueEnemigo = '🔥Fuego'
    }
    else if (atkEnemigoAleatorio==3){
        ataqueEnemigo = '🌱Tierra'
    }

    mostrarSeleccionesAtaques()
    combate()

}


//funcion para crear elementos HTML y mostrar los mensajes de las selecciones de ataques
function mostrarSeleccionesAtaques(){
    let atkDelJugador = document.getElementById('atkDelJugador')
    let AtkDelEnemigo = document.getElementById('AtkDelEnemigo')
    
    let selAtkUser = document.createElement('p')
    let selAtkPC = document.createElement('p')

    //Mostrar seleccion de usuario
    selAtkUser.innerHTML = ataqueJugador
    atkDelJugador.appendChild(selAtkUser)

    //mostrar seleccion de PC
    selAtkPC.innerHTML = ataqueEnemigo
    AtkDelEnemigo.appendChild(selAtkPC)


}


function combate(){
    let sectionMensajes = document.getElementById('mensajes')
    let rescombate = document.createElement('p')


    let spanVidasJugador = document.getElementById('vidas_Jugador')
    let spanVidasPC = document.getElementById('vidas_PC')


    if (ataqueJugador==ataqueEnemigo){
        //Empate
        rescombate.innerHTML = 'EMPATE'
        sectionMensajes.appendChild(rescombate)
    }
    else if (ataqueJugador=='💧Agua' && ataqueEnemigo=='🔥Fuego'){
        //Ganaste
        rescombate.innerHTML = 'GANASTE'
        sectionMensajes.appendChild(rescombate)
        vidasPC--
        spanVidasPC.innerHTML = vidasPC
    }
    else if (ataqueJugador=='🔥Fuego' && ataqueEnemigo=='🌱Tierra'){
        //Ganaste
        rescombate.innerHTML = 'GANASTE'
        sectionMensajes.appendChild(rescombate)
        vidasPC--
        spanVidasPC.innerHTML = vidasPC
    }
    else if (ataqueJugador=='🌱Tierra' && ataqueEnemigo=='💧Agua'){
        //Ganaste
        rescombate.innerHTML = 'GANASTE'
        sectionMensajes.appendChild(rescombate)
        vidasPC--
        spanVidasPC.innerHTML = vidasPC
    }
    else{
        //Perdiste
        rescombate.innerHTML = 'PERDISTE'
        sectionMensajes.appendChild(rescombate)
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    //Se llama a la funcion para validar vidas despues de cada combate
    revisarVidas()
}


//Funcion para validar si las vidas llegan a 0
function revisarVidas(){

    let bloqueBotonesAtk = document.getElementById('bloque-btn-atk')
    let bloqueSubtitulo = document.getElementById('bloque-subtitulo')
    
    if (vidasPC==0){
        mostrarResFinal("GANASTE!!! 🥳🎉🎉")
        bloqueBotonesAtk.style.display = 'none'
        bloqueSubtitulo.style.display = 'none'
    }
    else if (vidasJugador==0){
        mostrarResFinal("PERDISTE...😔😓😔")
        bloqueBotonesAtk.style.display = 'none'
        bloqueSubtitulo.style.display = 'none'
    }

}


//funcion para mostrar el resultado final GANAR o PERDER
function mostrarResFinal(resCombateFinal){
    //MOSTRAR boton de reiniciar
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

    let mensajeFinal = document.getElementById('mensaje_final')
    let mostrarResFinal = document.createElement('h1')

    //Mostrar Resultado Final
    mostrarResFinal.innerHTML = resCombateFinal
    mensajeFinal.appendChild(mostrarResFinal)

    //Deshabilitar botones 

    let botonAgua = document.getElementById('btn_sel_atk_agua')
    botonAgua.disabled = true
    let botonFuego = document.getElementById('btn_sel_atk_fuego')
    botonFuego.disabled = true
    let botonTierra = document.getElementById('btn_sel_atk_tierra')
    botonTierra.disabled = true
}


//Funcion para reiniciar el juego con el metodo de recargar la locacion
function reinciarJuego(){
    location.reload()
}


//funcion para generar un numero aleatorio entre 
function aleatorio(min, max){
    return Math.floor(Math.random() * (max-min+1)+min)
}


window.addEventListener('load', iniciarJuego)