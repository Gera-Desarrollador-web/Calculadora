
//Esto agrega a la pantalla el valor del boton
function agregar(valor){
    document.getElementById('pantalla').value += valor
}

//Esta funcion limpia la pantall
function borrar(){
    document.getElementById('pantalla').value = ''
}

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}