import axios from 'axios'

axios.defaults.baseURL = process.env.API_HOST

export function getContactsList() {
  return new Promise((resolve, reject) => {
    axios.get('/contacts').then(res => {
      resolve(res)
    }).then(err => {
      reject(err)
    })
  })
}

export function createContact(data) {
  return new Promise((resolve, reject) => {
    axios.post('/contacts', data).then(res => {
      resolve(res)
    }).then(err => {
      reject(err)
    })
  })
}
