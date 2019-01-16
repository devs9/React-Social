export default {
  user: {
    signIn(data) {
      return fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    },
    getData(id) {
      return fetch(
        `https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`
      )
    },
  },
  news: {
    getNews() {
      return fetch(
        'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
      )
    },
  },
}
