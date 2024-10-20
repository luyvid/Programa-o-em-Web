// Com base na idade e no ano atual, informe qual é o valor do ano de nascimento de uma pessoa. (Considere que essa pessoa já fez aniversario neste ano).
const anoAtual = parseInt(prompt("Digite o ano atual (considere o formato 20XX)"));
const idadeAtual = parseInt(prompt("Insira a sua idade"));

const anoNascimento = anoAtual - idadeAtual;
    alert(`Você nasceu no ano de ${anoNascimento}`);


// descobrir o ano que nasceu
