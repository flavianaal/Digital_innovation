
const nota1 = 1;
const nota2 = 6;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;


if (media < 5) {
    console.log('Aluno Reprovado');
} else if (media >=5 && media <= 7) {
    // usa o & para fazer comparação
    console.log('Aluno em Recuperação');
} else {
    console.log('Aluno Aprovado');
}