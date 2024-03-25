/***
 * 
 * Filtrar por fechas
 * 
 */

const fechas = [
    { id: 1, date: '2022-01-01' },
    { id: 2, date: '2022-02-01' },
    { id: 3, date: '2022-03-01' },
    { id: 4, date: '2022-04-01' },
    { id: 5, date: '2022-05-01' }
]

const filtroFechas = (fechas) => {
    //Creamos un contenedor div pque contendra el input
    // const div = document.createElement('div')
    //Le agregamos una clase al contenedor
    // div.className  = "contenedor" 
    //Le decimos donde vamos a guardar el input de fecha
    const contenedor = document.querySelector('#fecha');
    //Creamos el input
    // const fec = document.createElement( "input" );
    //le decimos que el input seria tipo date
    // fec.type = "date";
    //Le damos un nombre al input
    // fec.name = "date"

    // filtramos la fecha
    /* fechas.filter((fecha) => {
        if (!fecha.id === parseInt(fecha.indexOf(fecha))) {
            return
        }else{
            contenedor.append(fec)
        }
    }) */

    contenedor.append(fec)
    div.append(contenedor)
}
/* const filteredData = filtroFechas(fecha)
console.log(filteredData) */

/**
 * 
 * Local storage Actualizar
 * 
 */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#crud");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      //creamos user que contiene los usuarios, si no contiene usuarios regrese arreglo
      const users = JSON.parse(localStorage.getItem("users")) ?? [];
      //Aqui nose porque aun no llegaba a clases
      const formData = new FormData(form);
      //Aqui por igual
      const entries = formData.entries();
      //Aqui me parece  que es para convertir el iterador en un array y luego pasarlo a obj
      const data = Object.fromEntries(entries);
      //Obtenemos el id y lo guardamos en una variable
      const id = formData.get('id')  
      // Aqui creo que es extraer el valor de language
      data.languages = formData.getAll("languages");
      
      //Si existe id
      if(id){
        //Buscamos al usuario con ese id en el localstorage
          const usuerFind = users.find((user)=>user.id === data.id)
       if (usuerFind) {
          //Reemplazamos el usuario existente por el nuevo
          users[users.indexOf(usuerFind)]=data;
          //Eliminar
        //   delete usuerFind.name
          //Le  damos nuevo nombre al usuario existente
          usuerFind.name = data.name
          //Nos modifica  la info del usuario y se lo pasamos  al localstorage
          users.splice(users.indexOf(usuerFind),1 ,data)
          // Lo convertimos en string
          const jsonString = JSON.stringify(users)
          // se lo seteamos al local storage
          localStorage.setItem("users",jsonString)
      }
    }});
  });