
logarioInput = document.getElementById("logario")
senhaInput = document.getElementById("senha")
let logacao = []
let passe = []

function chamaLog(){

    logacao = JSON.parse(localStorage.getItem('Login'))
    passe = JSON.parse(localStorage.getItem('Wordpasse'))

    if(logacao == null){

        logacao = []
        passe = []
        logacao.push(logarioInput.value)
        passe.push(senhaInput.value)
        localStorage.setItem('Login', JSON.stringify(logacao))
        localStorage.setItem('Wordpasse', JSON.stringify(passe))

    }else{

        logacao.push(logarioInput.value) 
        passe.push(senhaInput.value)
        localStorage.setItem('Login', JSON.stringify(logacao))
        localStorage.setItem('Wordpasse', JSON.stringify(passe))
    }  

    alert("Login efetuado com sucesso :)")
}