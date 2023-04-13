const containerEl = document.getElementById("container-el")

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function createContainers(arr, num) {
    const post = document.createElement("div")
    post.classList.add('post')

    const header = document.createElement("div")
    header.classList.add('user-header')

    const avatar = document.createElement("div")
    avatar.classList.add('avatar-img', 'left')
    avatar.setAttribute('id', 'avatarId');

    const userInfo = document.createElement("div")
    userInfo.classList.add('user-info')

    const name = document.createElement("p")
    name.classList.add('bold', 'bottom')
    name.setAttribute('id', 'nameId');
    name.textContent = arr[num].name

    const location = document.createElement("p")
    location.classList.add('top', 'small')
    location.setAttribute('id', 'locationId');
    location.textContent = arr[num].location

    const postPic = document.createElement("div")
    postPic.classList.add('post-picture')
    postPic.setAttribute('id', 'picId');

    const userBody = document.createElement("div")
    userBody.classList.add('user-body', 'left')

    const icons = document.createElement("div")
    icons.classList.add('icons')

    const icon1 = document.createElement("img")
    icon1.setAttribute('src', 'images/icon-heart.png')

    const icon2 = document.createElement("img")
    icon2.setAttribute('src', 'images/icon-comment.png')

    const icon3 = document.createElement("img")
    icon3.setAttribute('src', 'images/icon-dm.png')

    const likes = document.createElement("p")
    likes.classList.add('bold', 'bottom')
    likes.setAttribute('id', 'likesId');
    likes.textContent = arr[num].likes + " likes"

    const usernames = document.createElement("span")
    usernames.classList.add('bold')
    usernames.setAttribute('id', 'usernameId')
    usernames.textContent = arr[num].username + " "

    const comment = document.createElement("p")
    comment.setAttribute('id', 'commentId');
    comment.textContent = arr[num].comment

    const avatarImg = document.createElement("img")
    avatarImg.setAttribute('src', arr[num].avatar)

    const postImg = document.createElement("img")
    postImg.setAttribute('src', arr[num].post)

    containerEl.append(post)
    post.append(header, postPic, userBody)
    header.append(avatar, userInfo)
    userInfo.append(name, location)
    comment.prepend(usernames)
    userBody.append(icons, likes, comment)
    icons.append(icon1, icon2, icon3)
    avatar.append(avatarImg)
    postPic.append(postImg)
}

function renderPosts(arr) {
    for (let i = 0; i < arr.length; i++) {
        createContainers(arr, i)
    }
}

renderPosts(posts)
