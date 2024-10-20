// Crie um algoritmo para receber 3 numeros e informe qual é o maior numero entre os 3)

const n1 = parseInt(prompt("Informe o primeiro valor: "));
const n2 = parseInt(prompt("Informe o segundo valor: "));
const n3 = parseInt(prompt("Informe o terceiro valor: "));

if (n1 > n2 && n1 > n3) {
    alert("O primeiro valor é o maior de todos");
} else if (n2 > n3 && n2 > n1) {
    alert("O segundo valor é o maior de todos");
} else {
    alert("O terceiro valor é o maior de todos");
}