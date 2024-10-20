// Declarar uma variável com o seu nome e a sua idade e apresentar na tela a frase: "FULANO, você possui X ANOS."
const nome = prompt("Insira o seu nome");
const idade = prompt("Insira a sua idade");
alert(`${nome}, você possui ${idade} anos de idade.`);

// ignorar
document.getElementById("nome").innerText = nome;
document.getElementById("idade").innerText = idade;