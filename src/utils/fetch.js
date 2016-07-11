import fetch from 'isomorphic-fetch'
import { apiServer } from 'config'

export default function(path, params) {
  return fetch(apiServer + path, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...params
  })
}
