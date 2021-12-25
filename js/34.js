function obtenerEmpleados(){

/*fetch("http://www.google.com/api")
fetch("empleados.json")
*/
const archivo = 'empleados.json';

fetch(archivo)

      .then( resultado => {
          console.log(resultado)
      })
}
obtenerEmpleados();

function obtenerEmpleados2(){

    /*fetch("http://www.google.com/api")
    fetch("empleados.json")
    */
    const archivo = 'empleados.json';
    
    fetch(archivo)
    
          .then( resultado => {
              return resultado.json();
          })
          .then (datos => {
              console.log(datos)
          })
    }
    obtenerEmpleados2();

   function obtenerEmpleados3(){

      
        const archivo = 'empleados.json';
        
        fetch(archivo)
        
              .then( resultado => {
                  return resultado.json();
              })
              .then (datos => {
                  //console.log(datos.empleados)

                  const { empleados} = datos;
                  //console.log(empleados)

                  empleados.forEach (empleado =>{

                    console.log(empleado.id)
                      console.log(  empleado.nombre);
                        console.log(empleado.puesto);

                        document.querySelector(".contenido").textContent += empleado.nombre
                  })
              })
        }
        obtenerEmpleados3();