
document.addEventListener("DOMContentLoaded", () => {

    /* const prueba = localStorage.getItem("users")
    console.log(prueba); */

    const solicitarDatos = () => {
        const container = document.querySelector('.mainContainer')
        const storage = JSON.parse(localStorage.getItem("users"));

        storage.forEach((posts) => {
            const mainBox = document.createElement('div')
            mainBox.id = 'mainBox'
            const imgUrl = document.createElement('img')
            const descriptionContent = document.createElement('a')
            const description = document.createElement('h2')
            const sectionContainer = document.createElement('div')
            const reaction = document.createElement('p')
            const numberReactions = document.createElement('span')
            const hashtag = document.createElement('a')
            const comments = document.createElement('p')
            const date = document.createElement('p')
            mainBox.append(imgUrl)
            mainBox.append(descriptionContent)
            descriptionContent.append(description)
            mainBox.append(sectionContainer)
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
            container.append(mainBox)
        })
        return storage
    }

    solicitarDatos()

});