//Agregano cambios desde mi tablea en el github
function calcularAreaCuadrado()
{
    const input = document.getElementById("cuadrado");
    const value = parseFloat(input.value);
    const valorArea = areaCuadrado(value);
    alert("El valor del area es: " + valorArea);
}
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("cuadrado");
    const value = parseFloat(input.value);
    const valorArea = perimetroCuadrado(value);
    alert("El valor del perimetro es: " + valorArea);
}
function calcularAreaTriangulo()
{
    const input1 = document.getElementById("baseTriangulo");
    const input2 = document.getElementById("alturaTriangulo");
    const altura = parseFloat(input2.value)
    const base = parseFloat(input1.value);
    const valorArea = (base*altura)/2;
    alert("El valor del area es de: " + valorArea);
}
function calcularPerimetroTriangulo()
{
    const input1 = document.getElementById("lado1Triangulo");
    const input2 = document.getElementById("lado2Triangulo");
    const input3 = document.getElementById("baseTriangulo");
    const valorPerimetro = parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value);
    alert("El valor del perimetro es: " + valorPerimetro);
}
function calcularAreaCirculo()
{
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value);
    const valorArea = Math.PI*radio*radio;
    alert("El valor del area es " + valorArea);
}
function calcularPerimetroCirculo()
{
    const input = document.getElementById("radio");
    const radio = parseFloat(input.value);
    const valorPerimetro = Math.PI*radio*2;
    alert("El valor del perimetro es de " + valorPerimetro);
}
function perimetroCuadrado(lado)
{
    return lado *4;
}
function areaCuadrado(lado)
{
    return lado**2;
}
function perimetroTriangulo(l1,l2,base)
{
    return l1 + l2 + base;
}
function areaTriangulo(base,altura)
{
    return (base*altura)/2;
}
function perimetroCirculo(radio)
{
    return Math.PI*radio*2;
}
function areaCirculo(radio)
{
    return Math.PI  *radio*radio;
}
