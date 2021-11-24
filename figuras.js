// CÓDIGO DE UN CUADRADO
console.group("CUADRADO");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden " + ladoCuadrado + " centimetros");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El valor del perimetro es: " + perimetroCuadrado + " centimetros");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area es: " + areaCuadrado + " centrimetos cuadrados");
console.groupEnd();
// CÓDIGO DE UN TRIANGULO
console.group("TRIANGULO");
const lado1 = 6;
const lado2 = 6;
const baseTriangulo = 4;
const altura = 5.5
console.log("los lados del triangulo miden: " 
+ lado1 + "cm, "
+ lado2 + "cm, "
+baseTriangulo + "cm"
);
console.log("la altura mide " + altura+ "cm");
const perimetroTriangulo = lado2 + lado1 + baseTriangulo;
console.log("El valor del perimetro es: " + perimetroTriangulo + " centimetros");
const areaTriangulo = (baseTriangulo*altura)/2;
console.log("El valor del area es " + areaTriangulo +"cm");
console.groupEnd();
// CÓDIGO CON UN CIRCULO
console.group("CIRCULO");
const radio = 4;
console.log("El valor del radio es " + radio + "cm");
const diametro = radio * 2;
console.log("El valor del diametro es " + diametro);
const pi = Math.PI; 
const circunferencia = pi * diametro;
console.log("El valor de la circunferencia es " + circunferencia + "cm");
const areaCirculo = pi * (radio**2);
console.log("El valor del area es " +areaCirculo + "cm");
console.groupEnd();