/* global fetch */
import { API_URL } from '../config.js'

class API {
  static _mountURLWithParams (slug, params) {
    if (!slug) {
      throw new Error('[API._mountURLWithParams()] : `slug` is mandatory')
    }

    const url = new URL(API_URL + slug)

    if (params && typeof params === 'object') {
      url.search = new URLSearchParams(params)
    }

    return url
  }

  static get (slug, params) {
    if (!slug) {
      throw new Error('[API.get()] : `slug` is mandatory')
    }

    const url = this._mountURLWithParams(slug, params)

    return fetch(url)
      .then(response => response.json())
      .then(posts => posts)
      .catch(error => {
        console.log('An error occured : ', error)
      })
  }
}

export default API
