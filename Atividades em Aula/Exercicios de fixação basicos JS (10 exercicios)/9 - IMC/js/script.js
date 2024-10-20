// Crie um algoritmo para receber as informações de peso e altura de uma pessoa, calcular o IMC e informar qual a situação dela.  Formula: Peso ÷ (altura x altura)​
const peso = parseInt(prompt("Insira o seu peso"));
const altura = parseFloat(prompt("Insira a sua altura"));
    alert(`O IMC é de: ${(peso/(altura*altura))}.`);