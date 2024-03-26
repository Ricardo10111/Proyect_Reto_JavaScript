// import { functionCrear } from './Funcion-Post'
document.addEventListener('DOMContentLoaded', () => {
  /**
   *
   *  Formulario
   *
   */
  const mainContainer = document.querySelector('body')
  // Crear form y agragarlo al body
  const divContainer = document.createElement('div')
  divContainer.id = 'divContainer'
  mainContainer.append(divContainer)
  const formulario = document.createElement('form')
  formulario.id = 'crud'
  divContainer.append(formulario)

  const inputID = document.createElement('input')
  inputID.type = 'text'
  inputID.name = 'id'
  inputID.placeholder = 'ID'
  formulario.appendChild(inputID)

  const space0 = document.createElement('br')
  formulario.appendChild(space0)

  const inputImage = document.createElement('input')
  inputImage.type = 'text'
  inputImage.name = 'urlImage'
  inputImage.placeholder = 'Imagen (URL)'
  formulario.appendChild(inputImage)

  const space = document.createElement('br')
  formulario.appendChild(space)

  const inputDescription = document.createElement('input')
  inputDescription.type = 'text'
  inputDescription.name = 'description'
  inputDescription.placeholder = 'Descripción'
  formulario.appendChild(inputDescription)

  const space1 = document.createElement('br')
  formulario.appendChild(space1)

  const selectReaction = document.createElement('select')
  selectReaction.name = 'reacciones'
  formulario.appendChild(selectReaction)

  const loveReaction = document.createElement('option')
  loveReaction.value = '❤️'
  loveReaction.textContent = '❤️'
  selectReaction.appendChild(loveReaction)

  const ponyReaction = document.createElement('option')
  ponyReaction.value = '🦄'
  ponyReaction.textContent = '🦄'
  selectReaction.appendChild(ponyReaction)

  const wowReaction = document.createElement('option')
  wowReaction.value = '🤯'
  wowReaction.textContent = '🤯'
  selectReaction.appendChild(wowReaction)

  const fireReaction = document.createElement('option')
  fireReaction.value = '🚀'
  fireReaction.textContent = '🚀'
  selectReaction.appendChild(fireReaction)

  const awsomeReaction = document.createElement('option')
  awsomeReaction.value = '🙌'
  awsomeReaction.textContent = '🙌'
  selectReaction.appendChild(awsomeReaction)

  const space2 = document.createElement('br')
  formulario.appendChild(space2)

  const selectHashtags = document.createElement('select')
  selectHashtags.name = 'hashtags'
  formulario.appendChild(selectHashtags)

  const firstHash = document.createElement('option')
  firstHash.value = '#programming'
  firstHash.textContent = '#programming'
  selectHashtags.appendChild(firstHash)

  const secondHash = document.createElement('option')
  secondHash.value = '#kodemia'
  secondHash.textContent = '#kodemia'
  selectHashtags.appendChild(secondHash)

  const thirdHash = document.createElement('option')
  thirdHash.value = '#retoJS'
  thirdHash.textContent = '#retoJS'
  selectHashtags.appendChild(thirdHash)

  const fourthHash = document.createElement('option')
  fourthHash.value = '#generacion32'
  fourthHash.textContent = '#generacion32'
  selectHashtags.appendChild(fourthHash)

  const fifthHash = document.createElement('option')
  fifthHash.value = '#team'
  fifthHash.textContent = '#team'
  selectHashtags.appendChild(fifthHash)

  const space3 = document.createElement('br')
  formulario.appendChild(space3)

  const inputReaction = document.createElement('input')
  inputReaction.type = 'text'
  inputReaction.name = 'numberReactions'
  inputReaction.placeholder = 'Número de Reacciones'
  formulario.appendChild(inputReaction)

  const space4 = document.createElement('br')
  formulario.appendChild(space4)

  const inputComments = document.createElement('input')
  inputComments.type = 'text'
  inputComments.name = 'numberComments'
  inputComments.placeholder = 'Número de Comentarios'
  formulario.appendChild(inputComments)

  const space5 = document.createElement('br')
  formulario.appendChild(space5)

  const inputDate = document.createElement('input')
  inputDate.type = 'date'
  inputDate.id = 'fecha'
  inputDate.name = 'fecha'
  inputDate.min = '2020-01-01'
  inputDate.max = '2025-01-01'
  formulario.appendChild(inputDate)

  const space6 = document.createElement('br')
  formulario.appendChild(space6)

  const buttomSubmit = document.createElement('input')
  buttomSubmit.type = 'submit'
  buttomSubmit.value = 'Enviar'
  formulario.appendChild(buttomSubmit)

  /**
   *
   *  Array para hacer los post
   *
   */
  const form = document.querySelector('#crud')
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
      location.reload()
    }
  })
})
