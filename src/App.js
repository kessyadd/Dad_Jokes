import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
// import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      id: '',
      type: '',
      setup: '',
      punchline: ''
    }
  }

  getJoke()
  {
    var url = `https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`;
    axios.get(url).then((getData)=>{
     this.setState({
      id: getData.data.id,
      type: getData.data.type,
      setup: getData.data.setup,
      punchline: getData.data.punchline

      })
    })
    
  }
  render() {
    console.log(this.state.punchline)
    return (
      <div className="App pt-5">
      <center>
        <div className="card text-right" style={{width: '500px'}}>
          <div className="card-body">
          <h1>{this.state.setup}</h1>
          <h3>{this.state.punchline}</h3>
          <Button color="danger" onClick={()=>{this.getJoke()}}>Reload <i className="fa fa-refresh fa-spin"></i></Button>       
          </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;
