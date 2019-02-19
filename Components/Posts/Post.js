class Post {
  static render (parent, data) {
    const post = document.createElement('li')
    const pre = document.createElement('pre')

    for (let key in data) {
      pre.textContent += `${key} : ${data[key]} \n`
    }

    post.appendChild(pre)
    parent.appendChild(post)
  }
}

export default Post
