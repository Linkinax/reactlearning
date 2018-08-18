import React, { Component } from 'react';
import logo from './logo.svg';
import Projects from './components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state= {
      projects: [
        {
          title: "Business website",
          category : "Web Design"
        },
          {
            title: "Social App",
            category : "Mobile Development"
          },
            {
              title: "Ecommerce website",
              category : "Web Development"
            }
      ]
    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h2 className="MyApp-title2">SUck my dick</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Projects  projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
