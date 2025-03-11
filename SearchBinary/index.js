const listLanguages = require('./array');

// Ordenação apenas caso a lista não esteja com valores ordenados
const sortedList = listLanguages.sort((a, b) => a.preco - b.preco);

function search(array, of, until, valueSeeked) {
  const middle = Math.floor((of + until) / 2);
  const actual = array[middle];

  if (of > until) {
    return -1;
  }

  if (valueSeeked === actual.preco) {
    return middle;
  }

  if (valueSeeked < actual.preco) {
    return search(array, of, middle - 1, valueSeeked);
  }

  if (valueSeeked > actual.preco) {
    return search(array, middle + 1, until, valueSeeked);
  }
}

console.log(search(sortedList, 0, sortedList.length - 1, 42));
// console.log(search(listLanguages, 0, listLanguages.length - 1, 60));

