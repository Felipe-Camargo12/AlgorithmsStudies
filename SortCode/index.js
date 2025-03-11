const listBooks = require('./array')

function mergeSort(array, nestingLevel = 0)
{
  //  O nestingLevel ou nivel de aninhamento, mostra os niveis de instância feito pelo mergeSort
  //  a partir disso podemos ver as subdivisões e comparações na prática, caso queira ocultar
  //  tal retorno, basta tirar o paramêtro "nestingLevel" e os logs abaixo.
  console.log(`Nível de aninhamento: ${nestingLevel}`)
  console.log(array)

  if(array.length > 1) {
    const middle = Math.floor(array.length / 2);
    const part1 = mergeSort(array.slice(0, middle), nestingLevel + 1);
    const part2 = mergeSort(array.slice(middle, array.length), nestingLevel + 1);
    array = Order(part1, part2);
  }

  return array;
}

function Order(part1, part2){
  let currentPositionPart1 = 0
  let currentPositionPart2 = 0
  const result = []

  while (currentPositionPart1 < part1.length && currentPositionPart2 < part2.length) {
    let currentProduct1 = part1[currentPositionPart1]
    let currentProduct2 = part2[currentPositionPart2]

    if (currentProduct1.preco < currentProduct2.preco) {
      result.push(currentProduct1)
      currentPositionPart1++;
    } else {
      result.push(currentProduct2)
      currentPositionPart2++;
    }
  }

  return result.concat(currentPositionPart1 < part1.length
    ? part1.slice(currentPositionPart1)
    : part2.slice(currentPositionPart2))

}
const sortedBooks = mergeSort(listBooks);

sortedBooks.forEach(book => {
  console.log(`${book.titulo} - ${book.autor} - R$ ${book.preco.toFixed(2)}`);
});

// Para visualizar apenas como json, retire "sortedBooks", e use:
//console.log(mergeSort(listBooks));
