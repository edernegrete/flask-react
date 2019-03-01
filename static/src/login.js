import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleData = this.handleData.bind(this);
  }
  async handleData(e) {
    e.preventDefault()
    const {password, username} = this.state
    const formData = new FormData();
      for (var key in this.state ) {
        formData.append(key, this.state[key]);
      }
    if(password && username) {
      const response = await fetch('http://127.0.0.1:5000/api/tokens', {
        method:'POST', 
        headers: {
          'Authorization': 'Basic ' + Buffer.from(username + ":" + password).toString('base64')
        },
        body: formData
      })
      const json = await response.json()
      window.token = json.token
      return 
    }
    alert('please provide a username and a password')
  }
  render() {
    return (
      <Form>
      <Form.Label>Login</Form.Label>
      <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={e => this.setState({
        username: e.target.value
      })}/>
      <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({
        password: e.target.value
      })}/>
      <Button type="submit" onClick={this.handleData}>
        Submit
      </Button>
  </Form>
    );
  }
}

export default Login;