export const deletePost = (index) => {
  const posts = JSON.parse(localStorage.getItem('posts'))
  if (index !== -1 && index < posts.length) {
    posts.splice(index, 1)
    localStorage.setItem('posts', JSON.stringify(posts))
    alert('Post eliminado exitosamente')
    location.reload()
  }
}
