let btnJogar = document.getElementById("btnJogar")
btnJogar.addEventListener('click',criarTorres)
let arr = []
let arr2 = []
let main = document.getElementById("main1");
let btnSec = document.getElementById("sectionResetButton")
function criarTorres(){
   
    btnJogar.style.display='none'
    let discColors = ['120, 143, 219','167, 145, 228','186, 230, 136','228, 129, 72']
    let main = document.getElementById("main1");
    for(let i=0; i<=2;i++){
        let torreContainer = document.createElement("section")
        torreContainer.classList.add('sectionTorre')
        let torre = document.createElement("div")
        torre.classList.add("torres")
        torre.id = i
        torreContainer.appendChild(torre)
        main.appendChild(torreContainer)
        torreContainer.addEventListener("click", checando)
        
    }
    let torreEsq = document.getElementById("0")
    let larguraDisco = 15
    for(let i=0; i<4;i++){
        let disco = document.createElement("div")
        disco.classList.add("discos")
        disco.id=`disco${i}`
        disco.style.width=`${larguraDisco}px`
        disco.style.height=`20px`
        disco.style.background=`rgb(${discColors[i]})`
        torreEsq.appendChild(disco)
        larguraDisco +=15
    }
    
}
function checando(event){
    let sectionTorres = document.getElementsByClassName('sectionTorre')
    if(event.target === sectionTorres[0] ||event.target === sectionTorres[1] ||event.target === sectionTorres[2] ){
        arr2.push(event.target)
        let torre = arr2[0].firstChild
        if(torre.firstChild){
            let torre= arr2[0].firstChild
            let discoSelecionado = torre.firstChild
            discoSelecionado.style.border='2px solid black'
            setTimeout(()=>{
                discoSelecionado.style.border='none'
            },3000)
        }
       
    }
    if(arr2.length === 2){
        let torre1 = arr2[0].firstChild
        let primeiroDisco = torre1.firstChild
        let torre2 = arr2[1].firstChild
        if(!torre1.firstChild || !torre1.firstChild && torre2.firstChild){
            erro(false)
        }
        if(torre2.firstChild && torre1.firstChild){
            if(torre2.firstChild.clientWidth > torre1.firstChild.clientWidth){
                torre2.insertBefore(torre1.firstChild, torre2.firstChild)
                vitoria(torre2)
            }else{
                erro(false)
            }
        }
        if(!torre2.firstChild){
            torre2.appendChild(primeiroDisco)
        }
        arr2 = new Array()
    }
}
function erro(mov){
    if(mov === false){
        let move = document.getElementById('pLossWin')
        let section = document.getElementById("sectionInfo")
        move.classList.add('derrota')
        move.innerHTML='Movimento inválido'
        section.appendChild(move)
        setTimeout(()=>{
            move.innerHTML=''
        },1500)
        section.appendChild(move)
    }
    
}



function vitoria(torre){
    if(torre !== document.getElementById('0')){
        let filhosQuant =torre.childElementCount;
    if(filhosQuant === 4){
        let section = document.getElementById("sectionInfo")
        let move = document.createElement('p')
        move.classList.add('vitoria')
        move.innerHTML='Vitoria'
        section.appendChild(move)
       
        let btn = document.createElement('button')
        btn.innerHTML='Reiniciar'
        sectionResetButton.appendChild(btn)
        btn.addEventListener('click', function(){
            move.remove()
            while(main.firstChild){
                main.removeChild(main.firstChild)
            }
            btnJogar.style.display='block'
            btn.style.display='none'
        })
    }
    }
    
}