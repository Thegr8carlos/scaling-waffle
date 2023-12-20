let pila = []; // Inicializa la pila como un arreglo vacío

function pushPila() {
    let value = document.getElementById("pilaInput").value;
    if (value) {
        pila.push(value);
        document.getElementById("pilaInput").value = '';
        displayPila();
        mostrarImagen('push.png');
    }   
}

function popPila() {
    if (pila.length > 0) {
        let pilaContainer = document.getElementById("pilaContainer");
        let lastElement = pilaContainer.firstChild;
        lastElement.classList.add("shrinking");

        setTimeout(() => {
            
            mostrarImagen('pop.png');
            pila.pop();
            displayPila();
        }, 2000); // Espera 2 segundos antes de eliminar el elemento
    }
}

function mostrarImagen(nombreImagen) {
    let imagenDiv = document.getElementById("imagenPila");
    imagenDiv.innerHTML = '<img src="' + nombreImagen + '" alt="Acción de Pila" />';
}

function displayPila() {
    let pilaContainer = document.getElementById("pilaContainer");
    pilaContainer.innerHTML = '';
    pila.slice().reverse().forEach(element => {
        let div = document.createElement("div");
        div.textContent = element;
        div.className = 'pilaElement growing';
        pilaContainer.appendChild(div);
    });
}
function guardarPila() {
    const pilaStr = JSON.stringify(pila);
    document.cookie = "pilaGuardada=" + pilaStr + ";max-age=86400;path=/"; // Guarda por 1 día
}

function cargarPila() {
    const cookies = document.cookie.split(';');
    const pilaCookie = cookies.find(row => row.startsWith('pilaGuardada'));
    if (pilaCookie) {
        const pilaStr = pilaCookie.split('=')[1];
        pila = JSON.parse(pilaStr);
        displayPila();
    } else {
        alert("No hay pila guardada.");
    }
}




//aaaaaaaaaaaaaa

let stack = []; // Inicializa la pila como un arreglo vacío

function pushStack() {
    let value = document.getElementById("stackInput").value;
    if (value) {
        stack.push(value); // Agrega el elemento a la pila
        displayStack(); // Actualiza la visualización de la pila
        document.getElementById("stackInput").value = ''; // Limpia el campo de entrada
    }
}

function popStack() {
    if (stack.length > 0) {
        stack.pop(); // Elimina el elemento superior de la pila
        displayStack(); // Actualiza la visualización de la pila
    }
}

function displayStack() {
    let stackContainer = document.getElementById("stackContainer");
    stackContainer.innerHTML = ''; // Limpia el contenedor actual
    stack.slice().reverse().forEach(element => {
        let div = document.createElement("div");
        div.textContent = element;
        stackContainer.appendChild(div);
    });
}


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
	const imagen = document.getElementById("imagenCola");
	imagen.removeChild(imagen.lastChild);
	const codigoCrearCola = document.createElement("img");
	codigoCrearCola.src="crearCola.svg";
	codigoCrearCola.setAttribute("class","imagenColaS");
	imagen.appendChild(codigoCrearCola);

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
		timing: function back(x, timeFraction) {
			return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
		}.bind(null, 3.5),
		draw: function(progress) {
			nuevoNodo.style.left = progress * 20 + '%';
		}
		});

	const imagen = document.getElementById("imagenCola");
	imagen.removeChild(imagen.lastChild);
	const codigoEncolar = document.createElement("img");
	codigoEncolar.src="encolar.png";
	codigoEncolar.setAttribute("class","imagenColaS");
	imagen.appendChild(codigoEncolar);
    
}

function animate(options) {

    var start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = options.timing(timeFraction)
      
      options.draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }


function dequeueQueue(){

    const cola = document.getElementById("cola");
	const anima = cola.lastChild;
	
	animate({
        duration: 1000,
        timing: function circ(timeFraction) {
          return 1 - Math.sin(Math.acos(timeFraction))
        },
        draw: function(progress) {
			anima.setAttribute("style","margin-left: "+ progress * 80 + "%;");
        }
    });

	setTimeout(() => {
		cola.removeChild(anima);
	  }, "1000");

	//mostrar codigo de cpp
	const imagen = document.getElementById("imagenCola");
	imagen.removeChild(imagen.lastChild);
	const codigoDesencolar = document.createElement("img");
	codigoDesencolar.src="desencolar.png";
	codigoDesencolar.setAttribute("class","imagenColaS");
	imagen.appendChild(codigoDesencolar);
	//termina cpp
	

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
		animate({
			duration: 1000,
			timing: function back(x, timeFraction) {
				return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
			}.bind(null, 3.5),
			draw: function(progress) {
				nuevoNodo.style.left = progress * 20 + '%';
			}
			});
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
