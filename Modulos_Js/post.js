export const solicitarDatos = () => {
  const container = document.querySelector('.mainContainer')
  const storage = JSON.parse(localStorage.getItem('users'))
  storage.forEach((posts) => {
    const mainBox = document.createElement('div')
    mainBox.id = 'mainBox'
    const imgUrl = document.createElement('img')
    imgUrl.id = 'Imagen'
    const descriptionContent = document.createElement('a')
    descriptionContent.id = 'descriptionContent'
    const description = document.createElement('h2')
    const sectionContainer = document.createElement('div')
    sectionContainer.id = 'sectionContainer'
    const reaction = document.createElement('p')
    const numberReactions = document.createElement('span')
    const hashtag = document.createElement('a')
    const comments = document.createElement('p')
    const date = document.createElement('p')
    const btnDeleteConteiner = document.createElement('div')
    btnDeleteConteiner.id = 'btnDeleteConteiner'
    const btnDelete = document.createElement('button')
    btnDelete.id = 'btnDelete'
    mainBox.append(imgUrl)
    mainBox.append(descriptionContent)
    descriptionContent.append(description)
    mainBox.append(sectionContainer)
    mainBox.append(btnDeleteConteiner)
    btnDeleteConteiner.append(btnDelete)
    sectionContainer.append(reaction)
    sectionContainer.append(hashtag)
    sectionContainer.append(comments)
    sectionContainer.append(date)

    description.textContent = posts.description
    imgUrl.src = posts.urlImage
    reaction.textContent = posts.reacciones
    numberReactions.textContent = posts.numberReactions
    hashtag.textContent = posts.hashtags
    date.textContent = posts.fecha
    comments.textContent = posts.numberComments
    container.prepend(mainBox)
    btnDelete.textContent = 'borrar'
  })
  return storage
}

solicitarDatos()
