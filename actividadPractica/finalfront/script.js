const cantidad = document.getElementById('validationCantidad')
const categoria = document.getElementById('validationCategoria')
const resumen = document.getElementById("btnResumen")
const borrar = document.getElementById("btnBorrar")



resumen.addEventListener('click', function(){
    
    const valorCantidad = cantidad.value;
    const valorCategoria = categoria.value;

    if(valorCantidad === '' || valorCategoria === ''){
        alert("Debe completar la Categoria y Cantidad");
    } else {
        const recibo = ((200 *  valorCategoria) * parseInt(valorCantidad));

        const div = document.getElementById('msgResumen');

        div.innerHTML = recibo
    }      
    
})