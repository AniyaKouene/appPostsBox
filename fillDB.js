var casual = require('casual');

module.exports = () => {
    const data = { posts: [] }
    // Create 50 posts
    for (let i = 0; i < 50; i++) {
      data.posts.push({ id: i, title: casual.title, content: casual.sentences(n=50), author: casual.name})
    }
    return data
  }