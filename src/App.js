import React, { Component } from 'react';
import Main from './komponen/Main';
import Footer from './komponen/Footer';

class App extends Component {
  constructor(){
    super();
    this.state={nama:''}
  }

  klik(){
    this.setState({nama: this.refs.nama.value});
  }
  render() {
    return (
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active">
                <a className="nav-link active" data-toggle="tab" href="#login">Login</a>
            </li>
            <li><a className="nav-link active" data-toggle="tab" href="#welcome">Welcome</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="login" className="tab-pane fade in active">
              <label for="name">Nama</label> 
              <input className="form-control" id="name" ref="nama" type="text"/><br/>
              <button type="submit" className="btn btn-primary"
              onClick={()=>{this.klik();}}>Klik!</button>
            </div>
            <div id="welcome" className="tab-pane fade">
              <h1><Main nama ={this.state.nama}/></h1>
            </div>
          </div>
          <Footer/>
        </div>
    );
  }
}

export default App;
