import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{name: 'eder', id: 2}],
    };
  }
  async componentDidMount() {
    // const response = await fetch('http://127.0.0.1:5000/api/tokens', {headers: {
    //   'Bearer Token': window.token
    // }})
    // const data = response.json()
    // this.setState({
    //   data
    // })
  }
  render() {
    return (
      <div>
        {this.state.data.map(item => <Card body key={item.id}>{item.name}</Card>)}
      </div>
    );
  }
}

export default List;