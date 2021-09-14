// imicios en el DOM formas de como navegar

let elemento;
elemento = document.all;
console.log(elemento);
elemento = document;
console.log(elemento);
elemento = document.all[10];
console.log(elemento);
elemento = document.head.children[4];
console.log(elemento);
elemento = document.body;
console.log(elemento);
elemento = document.domain;
console.log(elemento);
elemento = document.URL;
console.log(elemento);
elemento = document.characterSet;
console.log(elemento);
elemento = document.forms;
console.log(elemento);
let imagenes = Array.from(document.images);
console.log(imagenes);
imagenes.forEach((imagen) => {
	console.log(imagen);
});




//getElementById


let elemento;
let encabezado;
elemento = document.getElementById('hero');
elemento = elemento.id;
console.log(elemento);
elemento = document.getElementById('header').className;
elemento = elemento.id;
//
encabezado = document.getElementById('encabezado').innerText; //o .textContent
encabezado = document.getElementById('encabezado');
encabezado.style.background = 'red';
encabezado.style.color = '#0A14DC';
encabezado.style.padding = '5px';
encabezado.style.fontWeight = '900';
encabezado.innerText = 'los mejores cursos';
console.log(encabezado);


//query selector selecciona tanto clases, elementos, id, pero con las sintaxis de CSS
//devuelve unicamente un elemento o nodo


const encabezado = document.querySelector('#encabezado');
encabezado.style.background = 'yellow';
encabezado.style.color = '#0A14DC';
encabezado.style.padding = '5px';
encabezado.style.fontWeight = 'bold';
encabezado.textContent = 'cursos gratis';
const img = document.querySelector('.card img');
console.log(img);

let enlace;
enlace = document.querySelector('#principal a:nth-child(3)'); // last-child, first-child
console.log(enlace);

*/


// llamar a varios elementos  class, html tag, [#] selection of  html colection


enlaces = document.getElementsByClassName('enlace')[3];

enlaces.style.background = '#147804';
enlaces.style.color = '#CEDAFD';
enlaces.textContent = 'nuevo enlace';

console.log(enlaces);

const links = document.getElementsByTagName('a');

let enlaces_a  = Array.from(links);

enlaces_a.forEach((enlace) => {

	console.log(enlace.textContent);

});



// traversing
// children[#].children[0].children
// chilelement - last - first - count


const navegacion = document.querySelector('#principal');
console.log(navegacion.nodeName);
console.log(navegacion.children[0].nodeName); // childnodes pero devuleve toda clase denodos
console.log(navegacion.children[0].textContent = 'nuevo enlace');



// parentElement que es para el traversing pero a la inversa osea 'en padre'
// primos hermano sibling next - previous : ir hacia a delante y hacia atras en nodos o elemento hermanos

const cursos = document.querySelectorAll('.card');
console.log(cursos[0].parentElement.parentElement.parentElement.children[0].textContent = 'hola desde traversing');

const enlaces = document.querySelectorAll('.enlace');
console.log(enlaces[0].nextElementSibling.nextElementSibling.nextElementSibling.previousElementSibling);


//crear elemento
const enlace = document.createElement('a');
//poner clase a enlace
enlace.className = 'enlace';
//poner id
enlace.id = 'nuevo id';
console.log(enlace);
// atrivutos
enlace.setAttribute('href', '#');
// text content
enlace.textContent = 'nuevo enlace';
// agregarlo a HTML
document.querySelector('#secundaria').appendChild(enlace);



// remplazar elemento



const nuevoEncabezado =  document.createElement('h2');
nuevoEncabezado.style.color = 'red';
nuevoEncabezado.id = 'encabezado';
nuevoEncabezado.appendChild(document.createTextNode('los mejores cursos'))
const encabezadoOriginal = document.querySelector('#encabezado');
const elpadre = document.querySelector('#lista-cursos');
elpadre.replaceChild(nuevoEncabezado, encabezadoOriginal);



const primerLi = document.querySelector('.enlace');
let elemento;

elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;
// agregar atributo chekiar la existencia de atributo
primerLi.getAttribute('href'); // para traer 
primerLi.setAttribute('href', 'http://facebook.com'); // para insertar
elemento = primerLi.hasAttribute('href'); // para ver si existe

console.log(elemento);





primerLi.addEventListener('click',(e) => {
  console.log(e.type);



for (var i =  0; i <= 25; i++) {
	console.log(i);

}




