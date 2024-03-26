// import { solicitarDatos } from './post' assert { type: 'json' }
document.addEventListener('DOMContentLoaded', () => {
  const solicitarDatos = () => {
    const container = document.querySelector('.mainContainer')
    const storage = JSON.parse(localStorage.getItem('posts'))

    storage.forEach((posts, index) => {
      const mainBox = document.createElement('div')
      mainBox.className = 'mainBox'
      const imgUrl = document.createElement('img')
      imgUrl.className = 'imagen'
      const descriptionContent = document.createElement('a')
      descriptionContent.className = 'descriptionContent'
      const description = document.createElement('h2')
      const sectionContainer = document.createElement('div')
      sectionContainer.className = 'sectionContainer'
      const reaction = document.createElement('p')
      const numberReactions = document.createElement('span')
      const hashtag = document.createElement('a')
      const comments = document.createElement('p')
      const date = document.createElement('p')
      const btnDeleteConteiner = document.createElement('div')
      btnDeleteConteiner.className = 'btnDeleteConteiner'
      const btnDelete = document.createElement('button')
      btnDelete.className = 'btnDelete'

      mainBox.append(imgUrl)
      mainBox.append(descriptionContent)
      descriptionContent.append(description)
      mainBox.append(sectionContainer)
      mainBox.append(btnDeleteConteiner)
      btnDeleteConteiner.append(btnDelete)
      sectionContainer.append(reaction)
      sectionContainer.append(hashtag)
      sectionContainer.append(comments)
      sectionContainer.append(numberReactions)
      sectionContainer.append(date)
      container.prepend(mainBox)

      description.textContent = posts.description
      imgUrl.src = posts.urlImage
      reaction.textContent = posts.reacciones
      numberReactions.textContent = `Reactions ${posts.numberReactions}`
      hashtag.textContent = posts.hashtags
      date.textContent = `Date ${posts.fecha}`
      comments.textContent = `Comments ${posts.numberComments}`
      btnDelete.textContent = 'Borrar Post'

      btnDelete.addEventListener('click', () => {
        deletePost(index)
      })
    })

    return storage
  }

  solicitarDatos()

  // borrar

  const deletePost = (index) => {
    const posts = JSON.parse(localStorage.getItem('posts'))
    if (index !== -1 && index < posts.length) {
      posts.splice(index, 1)
      localStorage.setItem('posts', JSON.stringify(posts))
      alert('Post eliminado exitosamente')
      location.reload()
    }
  }
})
