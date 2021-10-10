import React, { Component } from "react";
import "../styles/App.css";
import styled from "styled-components";
import Timer from "../components/Timer";
import Adder from "../components/Adder";
import GlobalActions from "../components/GlobalActions";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timers: [],
		};
		// functions for Adder
		this.addTimer = this.addTimer.bind(this);
		// functions for Timer
		this.removeTimer = this.removeTimer.bind(this);
		this.acceptPlayMethod = this.acceptPlayMethod.bind(this);
		this.acceptStopMethod = this.acceptStopMethod.bind(this);
		this.acceptResetMethod = this.acceptResetMethod.bind(this);
		// functions for Global Actions
		this.playAllTimers = this.playAllTimers.bind(this);
		this.stopAllTimers = this.stopAllTimers.bind(this);
		this.resetAllTimers = this.resetAllTimers.bind(this);
		this.removeAllTimers = this.removeAllTimers.bind(this);
	}

	// functions for Adder
	addTimer = function (newTimer) {
		console.log("App addTimer");
		if (newTimer.timerName === "") {
			newTimer.timerName = "timer-" + (this.state.timers.length + 1);
		}
		this.setState((prevState) => {
			return {
				timers: [...prevState.timers, newTimer],
			};
		});
	};

	// functions for Timer
	removeTimer = function (i) {
		console.log("App removeTimer");
		this.setState((prevState) => {
			return {
				timers: prevState.timers.filter((item, j) => i !== j),
			};
		});
	};

	acceptPlayMethod(timerPlayMethod, i) {
		console.log("App acceptPlayMethod");
		this.setState((prevState) => {
			return {
				timers: prevState.timers.map((timer, index) => {
					return {
						...timer,
						playMethod:
							i === index ? timerPlayMethod : timer.playMethod,
					};
				}),
			};
		});
	}

	acceptStopMethod(timerStopMethod, i) {
		console.log("App acceptStopMethod");
		this.setState((prevState) => {
			return {
				timers: prevState.timers.map((timer, index) => {
					return {
						...timer,
						stopMethod:
							i === index ? timerStopMethod : timer.stopMethod,
					};
				}),
			};
		});
	}

	acceptResetMethod(timerResetMethod, i) {
		console.log("App acceptResetMethod");
		this.setState((prevState) => {
			return {
				timers: prevState.timers.map((timer, index) => {
					return {
						...timer,
						resetMethod:
							i === index ? timerResetMethod : timer.resetMethod,
					};
				}),
			};
		});
	}

	// functions for Global Actions
	removeAllTimers = function () {
		console.log("App removeAllTimers");
		this.setState(() => {
			return {
				timers: [],
			};
		});
	};

	playAllTimers = function () {
		console.log("App playAllTimers");
		for (const timer of this.state.timers) {
			timer.playMethod();
		}
	};

	stopAllTimers = function () {
		console.log("App stopAllTimers");
		for (const timer of this.state.timers) {
			timer.stopMethod();
		}
	};

	resetAllTimers = function () {
		console.log("App resetAllTimers");
		for (const timer of this.state.timers) {
			timer.resetMethod();
		}
	};

	componentDidMount() {
		console.log("App componentDidMount");
	}

	componentDidUpdate() {
		console.log("App componentDidUpdate");
	}

	render() {
		return (
			<div className="App">
				<Adder addTimer={this.addTimer} />
				<MainContent>
					<TimerWrapper>
						{this.state.timers.map((timer, index) => (
							<Timer
								key={timer.timerName}
								index={index}
								timerName={timer.timerName}
								isRunning={timer.isRunning}
								direction={timer.direction}
								cumulativeAmount={timer.cumulativeAmount}
								onComplete={timer.onComplete}
								removeTimer={() => {
									this.removeTimer(index);
								}}
								sendPlayMethod={this.acceptPlayMethod}
								sendStopMethod={this.acceptStopMethod}
								sendResetMethod={this.acceptResetMethod}
							/>
						))}
					</TimerWrapper>
				</MainContent>
				<GlobalActions
					playAll={this.playAllTimers}
					stopAll={this.stopAllTimers}
					removeAll={this.removeAllTimers}
					resetAll={this.resetAllTimers}
				/>
			</div>
		);
	}
}

const TimerWrapper = styled.div`
	font-size: 2rem;
	padding: 2rem 1rem;
	flex: 1 0 auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
	grid-gap: 1rem;
	grid-auto-flow: row dense;
	grid-auto-rows: 25rem;
`;

const MainContent = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	&::after {
		content: "";
		display: block;
		width: 100%;
		background: linear-gradient(135deg, #ede8de 25%, transparent 25%) -13px 0,
			linear-gradient(225deg, #ede8de 25%, transparent 25%) -13px 0,
			linear-gradient(315deg, #ede8de 25%, transparent 25%),
			linear-gradient(45deg, #ede8de 25%, transparent 25%);
		background-size: 26px 26px;
		background-color: #f7f2e8;
		flex-shrink: 0;
	}
	&::after {
		flex-basis: 9.8rem;
	}
`;

export default App;
