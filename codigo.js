//aaaaaaaaaaaaaa
//codigo para cola
let contC=0;
function newQueue(){
    if(contC===0){
        const datosCola = document.getElementById("datosCola");
        const inputT = document.createElement("input");
        inputT.setAttribute("id", "cajaTC");
        datosCola.appendChild(inputT);
        contC=contC+1;
    }
    
}

let numColas=0;
function enqueueQueue(){
    let valor = document.getElementById("cajaTC");
    const cola = document.getElementById("cola");
    const nuevoNodo = document.createElement("input");
    nuevoNodo.value = valor.value;
    nuevoNodo.readOnly=true;
    nuevoNodo.setAttribute("class","colaC");
    cola.insertBefore(nuevoNodo, cola.firstChild);
    numColas=numColas+12

    //let animado = document.getElementById("colaC");
    animate({
        duration: 1000,
        timing: function(timeFraction) {
        return Math.pow(timeFraction, 2);
        },
        draw: function(progress) {
        nuevoNodo.style.left = progress * (88) + '%';
        }
    });
    
}

function animate(options) {

    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
  
      // текущее состояние анимации
      var progress = options.timing(timeFraction)
      
      options.draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }


function dequeueQueue(){
    const cola = document.getElementById("cola");
    cola.removeChild(cola.lastChild);
}

function deleteCookies(){
    document.cookie.split(";").forEach(function(c) {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });
}

function storeQueue(){
    deleteCookies();
    const cola = document.getElementById("cola");
    const longitudCola = document.querySelectorAll('#cola .colaC').length;
    document.cookie = "cantidadE="+encodeURIComponent(longitudCola)+";max-age=120";
    for(let i=0; i<longitudCola; i++){
        let elemento = cola.getElementsByTagName("input")[i].value;
        document.cookie = "elemento"+i+"="+ encodeURIComponent(elemento)+";max-age=120";
    }
    alert(document.cookie);
    
}

function showCookies(){
    let cantidadE = getCookies("cantidadE");
    const cola = document.getElementById("cola");
    for(var i=cantidadE-1; i >= 0; i--){
        let param = "elemento"+i;
        let valor = getCookies(param);
        const nuevoNodo = document.createElement("input");
        nuevoNodo.value = valor;
        nuevoNodo.readOnly=true;
        nuevoNodo.setAttribute("class","colaC");
        cola.insertBefore(nuevoNodo, cola.firstChild);
    }
}

function getCookies(name){
    var nameEQ = name + "="; 
    var ca = document.cookie.split(';');
    let cookiesC;

    for(var i=0;i < ca.length;i++) {

    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) {
      cookiesC = decodeURIComponent( c.substring(nameEQ.length,c.length) );
    }

  }
  return cookiesC;

}   

function downloadQueue(){
    const cookies = document.cookie;
    const colaGuardada = cookies.lastIndexOf();
    alert(colaGuardada.toString);
    const cola = document.getElementById("cola");
    cola.appendChild(colaGuardada);
}
