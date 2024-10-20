//Cria duas variáveis que armazenem a população total do "Brasil" (leia-se Pais 1) e da "China" (leia-se Pais 2)
//Compare ambas e informe quem tem a maior população.

const Brasil = parseInt(prompt("Insira a população do Brasil"));
const China = parseInt(prompt("Insira a população da China"));

if(Brasil>China) {
    alert(`A população do Brasil é maior que a da China.`);
} else {
    alert(`A população da China é maior que a do Brasil.`);  
};