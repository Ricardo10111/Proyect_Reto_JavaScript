export const functionCrear = () => {
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
        alert('Post modificado exitosamente')
      } else {
        alert('No se encontró ningún Post con el ID proporcionado')
      }
    } else {
      // Añadir nuevos datos
      data.languages = formData.getAll('languages')
      data.id = users.length + 1
      data.nuevoMensaje = 'Hola, ¿cómo estás?'
      users.push(data)
      localStorage.setItem('users', JSON.stringify(users))
      alert('Post añadido exitosamente')
    }

    const deleteBtn = document.getElementById('btnDelete')
    deleteBtn.addEventListener('click', () => {
      const deleteUser = (id) => {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const index = users.findIndex((user) => user.id === parseInt(id))
        if (index !== -1) {
          users.splice(index, 1)
          localStorage.setItem('users', JSON.stringify(users))
          console.log('Post eliminado exitosamente')
        } else {
          console.log('No se encontró ningún Post con el ID proporcionado')
        }
      }
      const userIdToDelete = prompt(
        'Ingrese el ID del Post que desea eliminar:'
      )
      if (userIdToDelete) {
        deleteUser(userIdToDelete)
      }
    })
  })
}
