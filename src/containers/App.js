import React, { Component } from 'react';
import '../styles/App.css';
import Timer from "../components/Timer";

class App extends Component {
	constructor(){
		super();
		this.state = {

		}
	}


	render(){
		return (
		<div className="App">
			<Timer></Timer>
		</div>
		);
	}
}

export default App;
