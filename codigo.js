//aaaaaaaaaaaaaa
//codigo para cola
function newQueue(){
    const datosCola = document.getElementById("datosCola");
    const inputT = document.createElement("input");
    inputT.setAttribute("id", "cajaTC");
    datosCola.appendChild(inputT);
}
function enqueueQueue(){
    let valor = document.getElementById("cajaTC");
    const cola = document.getElementById("cola");
    const nuevoNodo = document.createElement("input");
    nuevoNodo.value = valor.value;
    nuevoNodo.readOnly=true;
    nuevoNodo.setAttribute("class","colaC");
    cola.insertBefore(nuevoNodo, cola.firstChild);
}
function dequeueQueue(){
    
}