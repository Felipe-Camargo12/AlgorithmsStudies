const listBooks = require('./array')

function filterPrice(pivo, array){
  let priceFiltred = 0;

  for(let current = 0; current < array.length; current++){
    let currentProduct = array[current]
    if (currentProduct.preco < pivo.preco){
      priceFiltred++;
    }
  }

  positionValue(array, array.indexOf(pivo), priceFiltred)
  return array
}

function positionValue(array, of, to) {
  const element1 = array[of];
  const element2 = array[to];

  array[to] = element1
  array[of] = element2
}

function positionForThePivo(array){
  let pivo = array[Math.floor(array.length / 2)];
  console.log(pivo)
  filterPrice(pivo, array);
  let smallerValues = 0;

  for(let analyzing = 0; analyzing < array.length; analyzing++){
    let current = array[analyzing];
    if(current.preco <= pivo.preco && current !== pivo){
      positionValue(array, analyzing, smallerValues)
      smallerValues++;
    }
  }

  return array;
}

console.log(positionForThePivo(listBooks));
// console.log(filterPrice(listBooks[2], listBooks));

module.exports = positionValue;