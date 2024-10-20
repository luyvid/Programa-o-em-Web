
let endereco = prompt ("Por favor, informe o seu endereço:");
let nome = prompt ("Por favor, informe o seu nome:");
let idade = prompt ("Por favor, informe a sua idade");
alert("Meu nome é" + nome + "e eu tenho" + idade + "anos. Moro em" + endereco + "endereço há tantos anos." );
alert(`Meu nome é ${nome}e eu tenho ${idade}de idade. Eu moro em ${emdereco}desde a infancia. `)

// -----------------------------------------------------------------------------------------

const n1 = parseInt(prompt("Informe o primeiro valor para soma "));
const n2 = parseInt(prompt("Informe o segundo valor para soma "));
const resultado = n1 + n2;
alert(`A soma dos números foi: ${resultado}`);

const result = document.getElementById("outraCoisa");
result.innerText = resultado;