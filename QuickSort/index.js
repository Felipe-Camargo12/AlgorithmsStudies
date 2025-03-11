const positionValue = require('./filtraMenores');
const listBooks = require('./array')

function quickSort(array, left, right) {
  if (array.length > 1) {
    let actualIndex = partition(array, left, right);
    if (left < actualIndex - 1) {
      quickSort(array, left, actualIndex - 1);
    }
    if (actualIndex < right) {
      quickSort(array, actualIndex, right)
    }
  }
  return array;
}

function partition(array, esquerda, direita) {
  console.log('array', array)
  console.log('esquerda, direita', esquerda, direita)
  let pivo = array[Math.floor((esquerda + direita) / 2)]
  let actualLeft = esquerda; //0
  let actualRight = direita; //10

  while (actualLeft <= actualRight) {
    while (array[actualLeft].preco < pivo.preco) {
      actualLeft++
    }

    while (array[actualRight].preco > pivo.preco) {
      actualRight--
    }

    if (actualLeft <= actualRight) {
      positionValue(array, actualLeft, actualRight);
      actualLeft++;
      actualRight--;
    }
  }
  return actualLeft;
}

console.log(quickSort(listBooks, 0, listBooks.length - 1))