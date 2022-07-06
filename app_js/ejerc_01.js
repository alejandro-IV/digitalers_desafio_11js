/* En el siguiente ejercicio se va a calcular el Punto de Equilibrio de la empresa financiera Argenfin. */


alert("Ingrese los datos para calcular el punto de equilibrio"); // Mensaje que se muestra por pantalla que se va a calcular el PE.

let costoFijo = parseFloat(prompt("Ingrese el costo fijo: ")); // Pedimos que se ingrese el costo fijo.
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario: ")); // Pedimos que se ingrese el precio unitario.
let costosVariables = parseFloat(prompt("Ingrese los costos variables: ")); // Pedimos que se ingrese los costos variables.

let resultado = costoFijo / (precioUnitario - costosVariables); // Realizamos el calculo del PE y la guardamos en la variable resultado.


alert("El punto de equilibrio es: " + resultado); //Mostramos por pantalla el resultado del cálculo realizado.

console.log( "El punto de equilibrio es: " + resultado ); //Mostramos por consola el resultado del cálculo realizado.



/* 
----------------------------------------------------------------------------------------------------------
En el siguiente ejercicio se desarrolla un presupuesto personal para la empresa financiera ArgenFin.
En donde se aplica un modelo común, es el modelo 50-30-20, que consiste en repartir los ingresos de esta 
forma: 50% para los gastos necesarios, 30% para gastos opcionales y un 20% para ahorro e inversión.       
----------------------------------------------------------------------------------------------------------
*/ 


/*
let ingresoTotal = parseFloat(prompt("Ingrese el monto de su ingreso total")); //Pedimos que se ingrese el ingreso total y se lo guarda en la variable.

let resultado1 = (ingresoTotal * 0.5); //Se multiplica el ingresoTotal * 0.5 para sacar el 50%.
let resultado2 = (ingresoTotal * 0.3); //Se multiplica el ingresoTotal * 0.3 para sacar el 30%.
let resultado3 = (ingresoTotal * 0.2); //Se multiplica el ingresoTotal * 0.2 para sacar el 20%.

alert ("Distribución de sus ingresos: \n"  +"Gastos necesarios: $ " + resultado1 + "\n" + "Gastos opcionales: $ " + resultado2 + "\n" + "Ahorro e inversión: $ " + resultado3); //Mostramos por pantalla los resultados obtenidos.

console.log ("Distribución de sus ingresos: \n"  +"Gastos necesarios: $ " + resultado1 + "\n" + "Gastos opcionales: $ " + resultado2 + "\n" + "Ahorro e inversión: $ " + resultado3); //Mostramos por consola los resultados obtenidos.
*/
