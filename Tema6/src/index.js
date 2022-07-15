import _ from 'lodash';
import './estilo.css';
import Imagen from './imagen.png';
import Datos from './datos.csv';
import YAML from './datos.yaml';
import JSON5 from './datos.json5';
import './estilo.scss';

if('serviceWorker' in navigator) {
 window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW Registrado', registration);
    }).catch(err => {
        console.log("SW no registrado", err);
    })
 })
}

function componente() {
    const elemento = document.createElement('div');
    elemento.innerHTML = _.join(['Hola', Datos[0][1]], ' ');
    elemento.classList.add('hola');
    const miImagen = new Image();
    miImagen.src = Imagen;
    elemento.appendChild(miImagen);
    
    console.log(Datos);
    return elemento;
}

console.log(YAML.title);
console.log(JSON5.owner.name);
document.body.appendChild(componente());
document.body.classList.add('fondo');