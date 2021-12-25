async function obtenerEmpleados4(){

    const archivo = 'empleados.json';
    
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos)
    }
    obtenerEmpleados4();