import { filtro } from './Modulos_Js/filtro.js'
import { createPosts } from './Modulos_Js/crear_posts.js'
document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('posts'))
  const containerMain = document.querySelector('.mainContainer')
  const container = document.createElement('div')
  container.className = 'containerPosts'
  containerMain.append(container)

  createPosts(data, container)

  filtro(data, container)
})
