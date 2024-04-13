export const functionCrear = (place) => {
  const form = document.querySelector(place)
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const posts = JSON.parse(localStorage.getItem('posts')) ?? []
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
    const id = formData.get('id')

    if (id) {
      const index = posts.findIndex((post) => post.id === parseInt(id))
      if (index !== -1) {
        posts[index] = { ...posts[index], ...data }
        localStorage.setItem('posts', JSON.stringify(posts))
        alert('Post modificado exitosamente')
        location.reload()
      } else {
        alert('No se encontró ningún Post con el ID proporcionado')
        location.reload()
      }
    } else {
      data.id = posts.length + 1
      posts.push(data)
      localStorage.setItem('posts', JSON.stringify(posts))
      alert('Post añadido exitosamente')
      // const miVentana = window.open('../index.html')
      // miVentana.close()

      location.reload()
    }
  })
}
