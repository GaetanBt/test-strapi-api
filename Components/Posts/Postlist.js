import API from '../../api/api.js'
import Post from './Post.js'

class PostsList {
  static async display (params) {
    const posts = await API.get('/posts', params)
    const postsList = document.createElement('ul')

    posts.map(post => Post.render(postsList, post))

    document.body.appendChild(postsList)
  }
}

export default PostsList
