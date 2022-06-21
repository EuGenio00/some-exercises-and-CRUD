
let nomeInput = document.getElementById("usuario")
let passeInput = document.getElementById("senha")

let usuarios = []
let senhas = []

function chamaCad(){

    usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    senhas = JSON.parse(localStorage.getItem('Senhas'))

    if(usuarios == null && senhas == null){

        usuarios = []
        senhas = []
        usuarios.push(nomeInput.value)
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
        senhas.push(passeInput.value)
        localStorage.setItem('Senhas', JSON.stringify(senhas))

    }else{
        usuarios.push(nomeInput.value)
        localStorage.setItem('Usuarios', JSON.stringify(usuarios))
        senhas.push(passeInput.value)
        localStorage.setItem('Senhas', JSON.stringify(senhas))

    }  

        //Swal.fire('Cadastro realizado com sucesso')

        alert("Cadastro realizado com sucesso:)")

    location.href = "./login.html"

}

function chamaLog(){
  
    let logou = 0
    let cadUsuario = document.getElementById("usuario_cadastro")
    let cadSenhas = document.getElementById("senha_cadastro")
    usuarios = JSON.parse(localStorage.getItem('Usuarios'))
    senhas = JSON.parse(localStorage.getItem('Senhas'))

    for(i=0; i < usuarios.length; i++){

        if(cadUsuario.value == usuarios[i] && cadSenhas.value == senhas[i]){

            logou = 1
        }
    
    }

    if(logou == 1){
    
        alert("Login efetuado")
    }else{

        alert("Falhou")
    }

}
