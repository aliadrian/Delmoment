import React, { Component } from 'react'
import axios from 'axios';

const Errands = props => (
  <tr>
    <td>{props.errand.user_title}</td>
    <td>{props.errand.user_firstname}</td>
    <td>{props.errand.user_lastname}</td>
    <td>{props.errand.user_email}</td>
    <td>{props.errand.user_address}</td>
    <td>{props.errand.user_mobile}</td>
    <td>{props.errand.user_description}</td>
  </tr>
)

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {errands: []}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/errands/errands')
    .then(response => {
      this.setState({errands: response.data})
    })
    .catch((error) => {
      console.log(error);
    })
  }

  errandList() {
    return this.state.errands.map(currentErrand => {
      return <Errands errand={currentErrand} key={currentErrand._id} />;
    })
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Errands</h1>
            <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            { this.errandList() }
          </tbody>
        </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
