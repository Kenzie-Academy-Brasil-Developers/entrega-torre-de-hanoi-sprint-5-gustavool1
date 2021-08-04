let btnJogar = document.getElementById("btnJogar")
btnJogar.addEventListener('click',criarTorres)
let arr = []
let main = document.getElementById("main1");
function criarTorres(){
   
    btnJogar.style.display='none'
    let discColors = ['120, 143, 219','167, 145, 228','186, 230, 136','228, 129, 72']
    let main = document.getElementById("main1");
    for(let i=0; i<=2;i++){
        let torre = document.createElement("div")
        torre.classList.add("torres")
        torre.id = i
        torre.addEventListener("click", clicado)
            
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


function clicado(event){
    let first = event.target
    arr.push(first)  
    let move = document.createElement('p')
    if(arr.length === 2){
        let segundoClique = document.getElementById(arr[1].id)
        if(segundoClique.firstChild !==null){
            let primeiroDisco = segundoClique.firstChild
            if(primeiroDisco.style.width >arr[0].firstChild.style.width){
                segundoClique.insertBefore(arr[0].firstChild, arr[1].firstChild)
                if(segundoClique.id !=='0'){
                    validar(segundoClique)
                }
            }else{
                let section = document.getElementById("sectionInfo")
                move.classList.add('derrota')
                move.innerHTML='Movimento inválido'
                setTimeout(()=>{
                    move.remove()
                },2000)
                section.appendChild(move)
        }
        }if(segundoClique.firstChild === null){
            segundoClique.appendChild(arr[0].firstChild)
        }
        arr = new Array()
   }
   
}
function validar(torre){
    let filhosQuant =torre.childElementCount;
    if(filhosQuant === 4){
        let section = document.getElementById("sectionInfo")
        let move = document.createElement('p')
        move.classList.add('vitoria')
        move.innerHTML='Vitoria'
        section.appendChild(move)
        
    }
}