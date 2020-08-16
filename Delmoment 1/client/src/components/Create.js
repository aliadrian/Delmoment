import React, { Component } from 'react'
import {todo} from './UserFunctions';

class Create extends Component {

  constructor() {
    super();

  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state = {
    user_firstname: '',
    user_lastname: '',
    user_address: '',
    user_mobile: 0,
    user_email: '',
    user_title: '',
    user_description: '',
  }
}

onChange(e) {
  this.setState({ [e.target.name]: e.target.value })
}

onSubmit(e) {
  e.preventDefault();

  const newErrand = {
    user_firstname: this.state.user_firstname,
    user_lastname: this.state.user_lastname,
    user_email: this.state.user_email,
    user_title: this.state.user_title,
    user_mobile: this.state.user_mobile,
    user_description: this.state.user_description,
    user_address: this.state.user_address
  }

  todo(newErrand).then(res => {
    this.props.history.push(`/list`)
  })
}

  render() {
    return (
      <div>
      <h3>Create errand</h3>
      <form onSubmit={this.onSubmit}>
        <div>
        <label>Title: </label>
          <input  type="text"
              required
              name="user_title"
              className="form-control"
              value={this.state.user_title}
              onChange={this.onChange}
              />
        </div>
        <div className="row">
        <div className="col-6">
        <label>First name: </label>
          <input  type="text"
              required
              name="user_firstname"
              className="form-control"
              value={this.state.user_firstname}
              onChange={this.onChange}
              />
        </div>
        <div className="col-6">
        <label>Last name: </label>
          <input  type="text"
              required
              name="user_lastname"
              className="form-control"
              value={this.state.user_lastname}
              onChange={this.onChange}
              />
        </div>
        </div>
        <div>
        <label>Address: </label>
          <input  type="text"
              required
              name="user_address"
              className="form-control"
              value={this.state.user_address}
              onChange={this.onChange}
              />
        </div>
        <div>
        <label>Mobile number: </label>
          <input  type="number"
              required
              name="user_mobile"
              className="form-control"
              value={this.state.user_mobile}
              onChange={this.onChange}
              />
        </div>
        <div>
        <label>Email: </label>
          <input  type="text"
              required
              name="user_email"
              className="form-control"
              value={this.state.user_email}
              onChange={this.onChange}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              name="user_description"
              className="form-control"
              value={this.state.user_description}
              onChange={this.onChange}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
        </div>
      </form>
      </div>
    )
  }
}

export default Create