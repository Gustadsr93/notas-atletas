let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

for (let i = 0; i < atletas.length; i++) {
  let nome = atletas[i].nome;
  let notas = atletas[i].notas.slice(); // cópia da matriz original para não alterar

  // Ordena as notas em ordem crescente
  notas.sort(function(a, b) {
    return a - b;
  });

  // Remove a menor e a maior nota
  let notasValidas = notas.slice(1, 4);

  // Calcula a média das três notas do meio
  let soma = 0;
  notasValidas.forEach(function(nota) {
    soma += nota;
  });

  let media = soma / notasValidas.length;

  // Exibe os dados
  console.log(`Atleta: ${nome}`);
  console.log(`Notas Obtidas: ${atletas[i].notas.join(",")}`);
  console.log(`Média Válida: ${media.toFixed(6)}\n`);
}
