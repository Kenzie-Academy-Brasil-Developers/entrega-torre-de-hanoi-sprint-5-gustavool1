window.onload = criarTorres()
let discoAtualId
let torreAtual = ''
let jogada2 = ''
let torre = []
let cont = 0
function criarTorres(){
    let discColors = ['120, 143, 219','167, 145, 228','186, 230, 136','228, 129, 72']
    let main = document.getElementById("main1");
    for(let i=0; i<=2;i++){
        let torre = document.createElement("div")
        torre.classList.add("torres")
        torre.id = i
        torre.addEventListener("click",function(event){
            let firstClick = event.currentTarget.id
            let jog2 = ''
            let checando = ''
            let torres = document.getElementsByClassName('torres')
            for(let i=0; i<torres.length;i++){
                
                torres[i].addEventListener("click", function(el){
                    jogada2 =el.currentTarget.id
                    cont ++ 
                })
                
            }
            console.log(cont)
           if(cont>0){
            moverDisco(firstClick, jogada2)
           }
            
        })
        main.appendChild(torre)
    }
    let torreEsq = document.getElementById("0")
    let larguraDisco = 30
    for(let i=0; i<4;i++){
        let disco = document.createElement("div")
        
        disco.classList.add("discos")
        disco.id=`disco${i}`
        disco.style.width=`${larguraDisco}px`
        disco.style.height=`20px`
        disco.style.background=`rgb(${discColors[i]})`
        torreEsq.appendChild(disco)
        larguraDisco +=20 
    }
   
}



function moverDisco(primeiroClick,segundoClick){
    console.log(primeiroClick)
    console.log(segundoClick)
}

function validar(){
    
}
