import { functionCrear } from './funcionpost.js'
document.addEventListener('DOMContentLoaded', () => {
  //  Formulario

  const mainContainer = document.querySelector('body')
  // Crear form y agragarlo al body
  const h1Formulario = document.createElement('h1')
  h1Formulario.className = 'h1Formulario'
  h1Formulario.textContent = 'Crea o modifica un Post!!!'
  mainContainer.append(h1Formulario)
  const divContainer = document.createElement('div')
  divContainer.id = 'divContainer'
  mainContainer.append(divContainer)
  const formulario = document.createElement('form')
  formulario.id = 'crud'
  divContainer.append(formulario)

  // F Inputs
  const inputFactory = (typeN, nameN, placeHolder) => {
    const inputN = document.createElement('input')
    inputN.type = typeN
    inputN.name = nameN
    inputN.placeholder = placeHolder

    return inputN
  }
  // F selects
  const selectFactory = (nameNew) => {
    const selectReaction = document.createElement('select')
    selectReaction.name = nameNew
    return selectReaction
  }
  // F options
  const optionsFactory = (info, textN) => {
    const options = document.createElement('option')
    options.value = info
    options.textContent = textN
    return options
  }

  formulario.append(
    inputFactory('text', 'id', 'Dame el ID que quieres modificar'),
    inputFactory('text', 'nombre', 'Pon tu nombre'),
    inputFactory('text', 'urlImageProfile', 'Imagen Perfil (URL)'),
    inputFactory('text', 'urlImage', 'Imagen (URL)'),
    inputFactory('text', 'description', 'Descripción')
  )
  formulario
    .appendChild(selectFactory('reacciones'))
    .append(
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('reacciones2'))
    .append(
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('reacciones3'))
    .append(
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('reacciones4'))
    .append(
      optionsFactory('❤️', '❤️'),
      optionsFactory('🦄', '🦄'),
      optionsFactory('🤯', '🤯'),
      optionsFactory('🚀', '🚀'),
      optionsFactory('🙌', '🙌')
    )
  formulario
    .appendChild(selectFactory('hashtags'))
    .append(
      optionsFactory('hashtags'),
      optionsFactory('#programming', '#programming'),
      optionsFactory('#kodemia', '#kodemia'),
      optionsFactory('#retoJS', '#retoJS'),
      optionsFactory('#generacion32', '#generacion32'),
      optionsFactory('#team', '#team')
    )
  formulario
    .appendChild(selectFactory('hashtags2'))
    .append(
      optionsFactory('hashtags'),
      optionsFactory('#programming', '#programming'),
      optionsFactory('#kodemia', '#kodemia'),
      optionsFactory('#retoJS', '#retoJS'),
      optionsFactory('#generacion32', '#generacion32'),
      optionsFactory('#team', '#team')
    )
  formulario
    .appendChild(selectFactory('hashtags3'))
    .append(
      optionsFactory('hashtags'),
      optionsFactory('#programming', '#programming'),
      optionsFactory('#kodemia', '#kodemia'),
      optionsFactory('#retoJS', '#retoJS'),
      optionsFactory('#generacion32', '#generacion32'),
      optionsFactory('#team', '#team')
    )
  formulario.append(
    inputFactory('text', 'numberReactions', 'Número de Reacciones'),
    inputFactory('text', 'numberComments', 'Número de Comentarios'),
    inputFactory('date', 'fecha')
  )

  const buttomSubmit = document.createElement('input')
  buttomSubmit.type = 'submit'
  buttomSubmit.value = 'Enviar'
  buttomSubmit.id = 'buttomSubmit'
  formulario.appendChild(buttomSubmit)

  // Funcion para agregar la info a localstorage
  functionCrear('#crud')
})
