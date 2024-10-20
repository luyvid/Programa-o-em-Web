// Crie um algoritmo que calcule o valor de desconto(%) do salário de uma pessoa e exiba qual será o seu salário após o desconto.​
function calcular () {

const salario = document.getElementById("salario").value;
const descontoP = document.getElementById("desconto").value;

const desconto = (salario / 100) * descontoP;
const resultado = salario - desconto;

resultado2 = document.getElementById("resultado");
resultado2.innerHTML = resultado;
};