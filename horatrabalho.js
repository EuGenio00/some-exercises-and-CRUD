/* Desenvolver um sistema simples de cálculo de valor de projeto baseado em horas gastas. O sistema deve possuir dois campos (inputs), um deles referente ao valor que você como profissional cobra por hora de trabalho e outro referente às horas de trabalho gastas no projeto. O resultado do valor total a ser cobrado pelo projeto deve ser mostrado na tela através de um botão "calcular valor".*/


let trabalhadoInput = document.getElementById("horaTrabalho")
let gastosInput = document.getElementById("horasGastos")
let valorTotal

    function trabalhohoras(){

        valorTotal = (Number(trabalhadoInput.value) * Number(gastosInput.value))

        alert(`O valor total a ser cobrado pelo projeto é ${valorTotal} R$.`)

    }
