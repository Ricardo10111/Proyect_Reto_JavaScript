document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#crud')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    const id = formData.get('id')

    // Modificar datos si se proporciona un ID
    if (id) {
      const index = users.findIndex((user) => user.id === parseInt(id))
      if (index !== -1) {
        users[index] = { ...users[index], ...data }
        localStorage.setItem('users', JSON.stringify(users))
        console.log('Usuario modificado exitosamente')
      } else {
        console.log('No se encontró ningún usuario con el ID proporcionado')
      }
    } else {
      // Añadir nuevos datos
      data.languages = formData.getAll('languages')
      data.id = users.length + 1
      data.nuevoMensaje = 'Hola, ¿cómo estás?'
      users.push(data)
      localStorage.setItem('users', JSON.stringify(users))
      console.log('Usuario añadido exitosamente')
    }
  })

  // Función para eliminar usuario
  const deleteUser = (id) => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    const index = users.findIndex((user) => user.id === parseInt(id))
    if (index !== -1) {
      users.splice(index, 1)
      localStorage.setItem('users', JSON.stringify(users))
      console.log('Usuario eliminado exitosamente')
    } else {
      console.log('No se encontró ningún usuario con el ID proporcionado')
    }
  }

  // Ejemplo de cómo llamar a la función de eliminación
  // Suponiendo que tienes un botón con id="deleteBtn" en tu HTML
  const deleteBtn = document.getElementById('deleteBtn')
  deleteBtn.addEventListener('click', () => {
    const userIdToDelete = prompt(
      'Ingrese el ID del usuario que desea eliminar:'
    )
    if (userIdToDelete) {
      deleteUser(userIdToDelete)
    }
  })
})
