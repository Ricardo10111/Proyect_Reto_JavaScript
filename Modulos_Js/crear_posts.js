import { deletePost } from './borrar_post.js'

export const createPosts = (postlist, appendera) => {
  // const data = JSON.parse(localStorage.getItem('posts'))
  postlist.forEach((posts, index) => {
    // funciones

    const pFactory = (classN, content) => {
      const pNew = document.createElement('p')
      pNew.className = classN
      pNew.textContent = content
      return pNew
    }

    const aFactory = (classN, content = '', date = '') => {
      const aNew = document.createElement('a')
      aNew.className = classN
      aNew.textContent = content
      aNew.append(date)
      return aNew
    }

    const divFactory = (
      classN,
      contentNew = '',
      contentNew2 = '',
      contentNew3 = '',
      contentNew4 = '',
      contentNew5 = ''
    ) => {
      const divNew = document.createElement('div')
      divNew.className = classN
      divNew.append(contentNew)
      divNew.append(contentNew2)
      divNew.append(contentNew3)
      divNew.append(contentNew4)
      divNew.append(contentNew5)

      return divNew
    }

    const imgFactory = (classN, srcN) => {
      const imgNew = document.createElement('img')
      imgNew.className = classN
      imgNew.src = srcN

      return imgNew
    }
    const h2Factory = (classN, content) => {
      const h2New = document.createElement('h2')
      h2New.className = classN
      h2New.textContent = content
      return h2New
    }

    const btnDelete = aFactory(
      'btnDelete',
      '',
      imgFactory('imagButtonDlt', '..//logos_svg/trashcan_114640.svg')
    )
    appendera.prepend(
      divFactory(
        'mainBox',
        imgFactory('imagen', posts.urlImage),
        divFactory(
          'dateContainer',
          imgFactory('imagenProfile', posts.urlImageProfile),
          divFactory(
            'nameDateContainer',
            pFactory('pName', posts.nombre),
            pFactory('pDate', posts.fecha)
          )
        ),
        divFactory('containerH2', h2Factory('h2Post', posts.description)),
        divFactory(
          'containerHashtags',
          aFactory('hash1', posts.hashtags),
          aFactory('hash2', posts.hashtags2),
          aFactory('hash3', posts.hashtags3)
        ),
        divFactory(
          'containerDown',
          divFactory(
            'iconsReactionContainer',
            divFactory(
              'iconsReaction',
              pFactory('icons', posts.reacciones),
              pFactory('icons', posts.reacciones2),
              pFactory('icons', posts.reacciones3),
              pFactory('icons', posts.reacciones4)
            ),
            divFactory(
              'containerReactions',
              pFactory('pNumReactions', `${posts.numberReactions} reactions`)
            )
          ),

          divFactory(
            'commentsContainer',
            imgFactory('imgComents', '../logos_svg/comments.svg'),
            pFactory('pNumComments', `${posts.numberComments} comments`)
          ),
          divFactory('btnDeleteConteiner', btnDelete)
        )
      )
    )

    btnDelete.addEventListener('click', () => {
      const resultado = window.confirm(
        'Estas seguro que quieres borrar el post?'
      )
      if (resultado) deletePost(index)
      if (!resultado) alert('Ok no lo borre!')
    })
  })

  // return data
}
