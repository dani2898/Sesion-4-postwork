  //Ejercicio 1

  function deepEqual(a, b){
    if (a === b){ 
        return true;
    }
        
    if (a == null || typeof(a) != "object" || b == null || typeof(b) != "object"){
        return false;
    } else{
        akeys = Object.keys(a);
        bkeys = Object.keys(b);

        if (akeys.length !== bkeys.length){
            return false;
        }

        for (var property in a) {
            if (b.hasOwnProperty(property))
            {  
              if (deepEqual(a[property],b[property]) === false)
                return false;
            }
            else
              return false;
          }
          return true;
    }
  }
  
  
  var john = {
    firstName: 'John',
    lastName: 'Doe'
  }

  var jessica = {
    firstName: 'Jessica',
    lastName: 'Simpson',
  }

  var a = null;
  var b = null;
  console.log("EJERCICIO 1");
  console.log('Test 1:', deepEqual(1, 1)); // true
  console.log('Test 2:', deepEqual(1, '1')); // false
  console.log('Test 3:', deepEqual(john, john)); // true
  console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })); // true
  console.log('Test 5:', deepEqual(john, { firstName: 'John' })); // false
  console.log('Test 6:', deepEqual(john, { firstName: 'John', Age: 12 })); // false
  console.log('Test 7:', deepEqual(john, jessica)); // false
  console.log('Test 8:', deepEqual(a, b)); // true
  console.log('Test 9:', deepEqual(john, a)); // false


//EJERCICIO 2
function chunk(array, size) {
  var arrayGeneral = [];
  // Code goes here
  var contador = 0; //contador para llevar control de iteraciones en el arreglo
  while (contador < array.length) {
    var chunk = []; //Cada iteracion reiniciamos el arreglo chunk, para insertar un arreglo nuevo, según el size
    for (let index = 0; index < size; index++) {
      //Las iteraciones se realizan según el size indicado en la función
      if (array[contador] != null) chunk[index] = array[contador]; //El contador nos ayuda para saber en que posición del array obtener el nuevo valor para chunk
      contador++;
    }
    arrayGeneral.push(chunk); //Insertamos el arreglo de chunk, cada uno con solo la cant. de elementos indicados en size.
  }
  return arrayGeneral; //regresamos el arreglo donde van los "chunks", o arreglos en partes
}

var data = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("EJERCICIO 2");
//JSON, Para convertir a String para la impresión en consola.
console.log("Test 1:", JSON.stringify(chunk(data, 1))); // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log("Test 2:", JSON.stringify(chunk(data, 2))); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log("Test 3:", JSON.stringify(chunk(data, 3)));
console.log("Test 4:", JSON.stringify(chunk(data, 4))); // [[1, 2, 3], [4, 5, 6], [7, 8]]

//Ejercicio 3

function frequency(string) {
  var objString = {};

  for (var i = 0; i < string.length; i++) {
      //charAt returns index on the string
      var character = string.charAt(i);
      if (objString[character]) {
          objString[character]++;
      } else {
          objString[character] = 1;
      }
  }

  //fromEntries - Returns a new object from an iterable of key-value pairs (reverses Object.entries).

  //Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
  return Object.fromEntries(Object.entries(objString).sort());
}
console.log("EJERCICIO 3");
console.log("Test 1:", frequency("cccbbbaaaa"));
// {a: 3, b: 3, c: 3}
console.log("Test 2:", frequency("www.bedu.org"));
// {.: 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3}
console.log("Test 3:", frequency("john.doe@domain.com"));
// {.: 2, @: 1, a: 1, c: 1, d: 2, e: 1, h: 1, i: 1, j: 1, m: 2, n: 2, o: 4}