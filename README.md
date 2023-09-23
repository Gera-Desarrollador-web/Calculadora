# Calculadora
Este repositorio contiene una calculadora web interactiva desarrollada utilizando las tecnologías web fundamentales: HTML, CSS y JavaScript. Esta calculadora es una herramienta versátil que permite a los usuarios realizar operaciones matemáticas básicas como suma, resta, multiplicación y división de manera rápida y sencilla directamente desde su navegador web.

![](https://github.com/Gera-Desarrollador-web/Calculadora/blob/master/README.png?raw=true)

<h2>Funciones principales</h2>

### Agregar
```
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
```
### Borrar
```
function borrar(){
    document.getElementById('pantalla').value = ''
}
```
### Calcular
```
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
```
