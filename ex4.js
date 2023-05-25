// https://www.w3schools.com/react/react_es6_destructuring.asp

// Operador de desestructuración

    // el operador de desestructuración ES6 lo que hace es que creas una variable que sea igual a un array de numeros o de strings y seguidamente creas otra variable de un array dandole un valor a los numeros en este caso -1 seria la tempMin y 20 la tempMax , se entiende que el primer valor de el segundo array es -1 por su posicion y 20 es tempMax por su posición tambien , es importante poner el = a la variable principal temp.
    const temp = [-1 , 20]

    const [tempMin, tempMax] = temp

    console.log(tempMin, tempMax); // Funciona, forma ES5

    // Reescribe el código de arriba usando ES6

    // TODO: Usa el operador de destrcturación para asignar el valor de la primera posición del array a tempDestructMin, y la segunda posición del array a tempDesustructMax

    // console.log(tempDestructMin, tempDestructMax) // -1 20


