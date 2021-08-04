window.onload = criarTorres()
function criarTorres(){
    let discColors = ['120, 143, 219','167, 145, 228','186, 230, 136','228, 129, 72']
    let main = document.getElementById("main1");
    let divEsq = document.createElement("div")
    divEsq.id = 'divEsq'
    divEsq.classList.add("torres")
    let larguraDisco = 30
    for(let i=0; i<4;i++){
        let disco = document.createElement("div")
        disco.classList.add("discos")
        disco.id=`disco${i}`
        disco.style.width=`${larguraDisco}px`
        disco.style.height=`20px`
        disco.style.background=`rgb(${discColors[i]})`
        divEsq.appendChild(disco)
        larguraDisco +=20 
    }
    main.appendChild(divEsq)
    let divMeio = document.createElement("div")
    divMeio.id = 'divMeio'
    divMeio.classList.add("torres")
    main.appendChild(divMeio)
    let divDir = document.createElement("div")
    divDir.id = 'divDir'
    divDir.classList.add("torres")
    main.appendChild(divDir)
    
}



function moverDisco(){

}

function validar(){
    let filhosQuant =torre.childElementCount;
    if(filhosQuant === 4){
            alert("WINNNN");
    }
}