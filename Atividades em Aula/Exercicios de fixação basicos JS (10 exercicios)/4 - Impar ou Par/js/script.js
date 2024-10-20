//Crie uma variável para receber um valor e definir se ela é par ou impar.
const valor = prompt("Insira um número");
let valor1;

if (valor % 2) {
    alert(`O valor ${valor} é impar`);
    valor1 = "impar";
} else {
    alert(`O valor ${valor} é par`);
    valor1 = "par";
};

document.getElementById("valor").innerText = valor;
document.getElementById("valor1").innerText = valor1;