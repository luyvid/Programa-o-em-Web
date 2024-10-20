// Receba 4 valores numéricos de notas (entre 0 e 10), faça a média dessas notas e informe se o aluno foi 
// aprovado(caso a nota seja superior a 7), em recuperação(caso a média seja entre 5 e 6.9) e 
// reprovado(caso a média seja inferior a 5)
const val1 = parseInt(prompt("Insira o primeiro valor"));
const val2 = parseInt(prompt("Insira o segundo valor"));
const val3 = parseInt(prompt("Insira o terceiro valor"));
const val4 = parseInt(prompt("Insira o quarto valor"));

const mediaNotas = (val1+val2+val3+val4)/4;

if (mediaNotas<=4) {
    alert(`O aluno foi reprovado. Nota final de ${mediaNotas}.`);
} else if (mediaNotas<=6.9) {
    alert(`O aluno ficou em recuperação. Nota final de ${mediaNotas}.`);
} else {
    alert(`O aluno foi aprovado. Nota final de ${mediaNotas}.`);
};