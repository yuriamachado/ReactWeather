var names = ['Andrew', 'Julie', 'Jen'];
//
// //Modo tradicional de fazer um forEach
// names.forEach(function(name) {
//     console.log('forEach', name);
// });
//
// //Modo ES6 usando arrow-function
// names.forEach((name) => {
//     console.log("arrowFunc", name);
// });
//
// //Se somente usa uma linha.
// names.forEach((name) => console.log(name, "teste"));

// Exemplo arrow function uma linha
// var returnMe = (name) => name + "!";

// Exemplo arrow function várias linhas
// var returnMe = (name) => {
//   var mr = "Mr.";
//   return mr + name + "!";
// };

// console.log(returnMe('Yuri'));

// função norma que deve ser feito o bind(vinculo) pelo programdor
// var person = {
//   nameP: "Yuri",
//   greet: function () {
        // Faz o vinculo
//     var thePersonObj = this;
//     names.forEach(function (name) {
//       console.log(thePersonObj.nameP + ' says hi to ' + name);
//     });
//   }
// };

//person.greet();
//person.greet().apply(person);

// Arrow function fazem bind(vinculo) para a keyword this
// var person = {
//   nameP: "Yuri",
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.nameP + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//Chalenge
// function add(a, b) {
//   return a + b;
// }

//console.log(add(1 ,3));
//console.log(add(9 ,0));

//addStatement
var addStatement = (a , b) => {
  return a + b;
}
console.log(addStatement(1,3));

//addExpression
var addExpression = (a , b) => a + b;

console.log(addExpression(10, -20));
