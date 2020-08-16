import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const todo = newErrand => {
  return axios
    .post('http://localhost:5000/errands/add', {
      user_title: newErrand.user_title,
      user_firstname: newErrand.user_firstname,
      user_lastname: newErrand.user_lastname,
      user_address: newErrand.user_address,
      user_mobile: newErrand.user_mobile,
      user_email: newErrand.user_email,
      user_description: newErrand.user_description
    })
    .then(response => {
      console.log('New Errand', response)
    })
    .catch(err => {
      console.log(err)
    })
}