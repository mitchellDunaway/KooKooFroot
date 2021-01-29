import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {

		}
	}


	render(){
		return (
		  <div className="App">
			  <header className="header">
				  <div className="adder-wrapper"></div>		
			  </header>
			  <main className="main">		
				  <div className="timer-wrapper"></div>
			  </main>
			  <footer className="footer">
				  <div className="global-actions-wrapper"></div>
			  </footer>
		  </div>
		);
	}
}

export default App;
