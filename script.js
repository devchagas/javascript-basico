/*let array = ['string', 1, true];
console.log(array);

console.log(vetor);
console.log(vetor[0]);*/

let vetor = ['string', 1, true, ['vet1', 2], ['vet2'], ['vet3']];

vetor.forEach(function(item, index) {
   console.log(item, index) ;
})

vetor.push('novo item');
console.log(vetor);

vetor.pop();
console.log(vetor);

vetor.shift();
console.log(vetor);

vetor.unshift('novo item no inicio');
console.log(vetor);

console.log(vetor.indexOf(true));

vetor.splice(0, 3);
console.log(vetor);

let novoVetor = vetor.slice(0, 2);
console.log(novoVetor)

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['vetor'],
    objectInterno: { stringObjectInterno: 'objeto interno'},
};

console.log(object);

console.log(object.boolean);
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var vetorInterno = object.array;
console.log(vetorInterno);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);