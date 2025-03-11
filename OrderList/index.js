const { editoraOne, editoraPremium } = require('./listArrays')

// Usa o metodo sort para ordenar as listas antes do merge
const sortedEditoraOne = [...editoraOne].sort((a, b) => a.preco - b.preco);
const sortedEditoraPremium = [...editoraPremium].sort((a, b) => a.preco - b.preco);

function mergeList(list1, list2) {
  let finalList = [];
  let positionList1 = 0;
  let positionList2 = 0;
  let current = 0;

  while (positionList1 < list1.length && positionList2 < list2.length) {
    let currentProduct1 = list1[positionList1];
    let currentProduct2 = list2[positionList2];
    console.log(`Comparando ${currentProduct1.nome} com ${currentProduct2.nome}`)

    if (currentProduct1.preco < currentProduct2.preco) {
      finalList[current] = currentProduct1;
      positionList1++;
    } else {
      finalList[current] = currentProduct2;
      positionList2++;
    }

    current++;
  }

  while(positionList1 < list1.length){
    finalList[current] = list1[positionList1];
    positionList1++;
    current++;
  }

  while(positionList2 < list2.length){
    finalList[current] = list2[positionList2];
    positionList2++;
    current++;
  }

  return finalList;
}

console.log(mergeList(sortedEditoraOne, sortedEditoraPremium))