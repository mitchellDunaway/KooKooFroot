import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareDown, faCaretSquareUp, faFastBackward, faPlay, faStop, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export default class Timer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: props.timerName ?? "placeholder",
			totalDate: new Date(0),
			running: props.isRunning ?? false,
			direction: props.direction ?? 1,
			initialAmount: 0,
			intervalAmount: 0,
			cumulativeAmount: props.cumulativeAmount ?? 0,
		};
		this.beginNewInterval = this.beginNewInterval.bind(this);
		this.runCounter = this.runCounter.bind(this);
		this.updateTotalDate = this.updateTotalDate.bind(this);
		this.updateCumulative = this.updateCumulative.bind(this);
		this.resetCumulativeDate = this.resetCumulativeDate.bind(this);
		this.adjustTime = this.adjustTime.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.reset = this.reset.bind(this);
		this.updateName = this.updateName.bind(this);
	}



	adjustTime = function (interval, direction) {
		console.log(this.state.name, " adjustTime");
		this.setState((prevState) => {
			switch (interval) {
				case 'seconds': {
					return {
						cumulativeAmount: prevState.cumulativeAmount + (direction * 1000),
					}
				}
				case 'minutes': {
					return {
						cumulativeAmount: prevState.cumulativeAmount + (direction * 1000 * 60),
					}
				}
				case 'hours': {
					return {
						cumulativeAmount: prevState.cumulativeAmount + (direction * 1000 * 60 * 60),
					}
				}
				default: {
					return false;
				}
			}
		}, () => {
			this.updateTotalDate();
		});
	}

	updateName = function (event) {
		console.log(this.state.name, " updateName");
		this.setState((state, props) => {
			return {
				name: event.target.value
			}
		});
	}

	start = function (direction) {
		console.log(this.state.name, " start");
		this.setState((prevState) => {
			if (prevState.running) {
				return {
					direction: direction ?? prevState.direction,
				}
			} else {
				return {
					running: true,
					direction: direction ?? prevState.direction,
				}
			}
		}, () => {
			this.updateCumulative();
			this.beginNewInterval();
			this.runCounter();
		});
	}

	beginNewInterval = function () {
		console.log(this.state.name, " beginNewInterval");
		this.setState(() => {
			return {
				initialAmount: Date.now(),
				intervalAmount: 0
			}
		});
	}

	runCounter = function () {
		console.log(this.state.name, " runCounter");
		const currentAmount = Date.now();
		this.setState((prevState) => {
			return {
				intervalAmount: (currentAmount - prevState.initialAmount > 0 ? currentAmount - prevState.initialAmount : 0) * this.state.direction
			}
		}, () => {
			this.updateTotalDate();
		});
	}

	stop = function () {
		console.log(this.state.name, " stop");
		clearTimeout(this.runCounterTimeout);
		this.setState(() => {
			return {
				running: false,
			}
		}, () => {
			this.updateCumulative();
			this.beginNewInterval();
			this.updateTotalDate();
		});
	}

	updateCumulative = function () {
		console.log(this.state.name, " updateCumulative");
		this.setState((prevState) => {
			return {
				cumulativeAmount: prevState.totalDate.getTime()
			}
		});
	}

	reset = function () {
		console.log(this.state.name, " reset");
		this.beginNewInterval();
		this.resetCumulativeDate();
		this.updateTotalDate();
	}

	resetCumulativeDate = function () {
		console.log(this.state.name, " resetCumulativeDate");
		this.setState(() => {
			return {
				cumulativeAmount: this.props.cumulativeAmount ?? 0,
			}
		});
	}

	updateTotalDate = function () {
		console.log(this.state.name, " updateTotalDate");
		this.setState((prevState) => {
			return {
				totalDate: new Date(prevState.intervalAmount + prevState.cumulativeAmount)
			}
		}, () => {
			if (this.state.totalDate.getTime() < 1000 && this.state.direction < 0 && this.state.running) {
				this.stop();
				if (typeof this.props.onComplete !== "undefined") {
					this.props.onComplete();
				}
				// change the display of the timer
				// 
			}
			if (this.state.running) {
				this.runCounterTimeout = setTimeout(this.runCounter, 1000);
			}
		});
	}

	componentDidMount() {
		console.log(this.state.name, " componentDidMount");
		this.props.sendPlayMethod(this.start, this.props.index);
		this.props.sendStopMethod(this.stop, this.props.index);
		this.props.sendResetMethod(this.reset, this.props.index);
		if (this.state.running) {
			this.start();
		}
	}

	componentDidUpdate() {
		console.log(this.state.name, " componentDidUpdate");

	}

	componentWillUnmount() {
		console.log(this.state.name, " componentWillUnmount");
		clearTimeout(this.runCounterTimeout);
	}

	render() {
		return (
			<TimerMain id={this.state.name}>
				{false ?
					<TimerTimesUpNotice>
						Times Up
					</TimerTimesUpNotice>
					:
					null
				}

				<TimerCloseButton onClick={this.props.removeTimer}>
					<FontAwesomeIcon icon={faTimesCircle} />
				</TimerCloseButton>

				<TimerName
					type="textfield"
					name="timer__textfield"
					className="timer__name"
					value={this.state.name}
					onChange={this.updateName}
				></TimerName>

				<TimerButtonContainer>
					<TimerButton onClick={this.reset}>
						<FontAwesomeIcon icon={faFastBackward} />
					</TimerButton>

					<TimerButton onClick={this.state.running && this.state.direction === -1 ? this.stop : () => this.start(-1)}>
						{this.state.running && this.state.direction === -1 ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} flip="horizontal" />}
					</TimerButton>

					<TimerButton onClick={this.state.running && this.state.direction === 1 ? this.stop : () => this.start(1)}>
						{this.state.running && this.state.direction === 1 ? <FontAwesomeIcon icon={faStop} /> : <FontAwesomeIcon icon={faPlay} />}
					</TimerButton>
				</TimerButtonContainer>

				<TimerDisplay className={this.state.running ? "playing" : ""}>

					<TimerSetTime onClick={() => { this.adjustTime('hours', 1) }}>
						<FontAwesomeIcon icon={faCaretSquareUp} />
					</TimerSetTime>
					<TimerSetTime onClick={() => { this.adjustTime('minutes', 1) }}>
						<FontAwesomeIcon icon={faCaretSquareUp} />
					</TimerSetTime>
					<TimerSetTime onClick={() => { this.adjustTime('seconds', 1) }}>
						<FontAwesomeIcon icon={faCaretSquareUp} />
					</TimerSetTime>

					<TimerDisplayTime timeUnit="h">
						{this.state.totalDate.toISOString().substr(11, 2)}
					</TimerDisplayTime>
					<TimerDisplayTime timeUnit="m">
						{this.state.totalDate.toISOString().substr(14, 2)}
					</TimerDisplayTime>
					<TimerDisplayTime timeUnit="s">
						{this.state.totalDate.toISOString().substr(17, 2)}
					</TimerDisplayTime>

					<TimerSetTime onClick={() => { this.adjustTime('hours', -1) }}>
						<FontAwesomeIcon icon={faCaretSquareDown} />
					</TimerSetTime>
					<TimerSetTime onClick={() => { this.adjustTime('minutes', -1) }}>
						<FontAwesomeIcon icon={faCaretSquareDown} />
					</TimerSetTime>
					<TimerSetTime onClick={() => { this.adjustTime('seconds', -1) }}>
						<FontAwesomeIcon icon={faCaretSquareDown} />
					</TimerSetTime>

				</TimerDisplay>
			</TimerMain>
		)
	}
}

const TimerMain = styled.div`
border: 3px solid #f5e7cc;
padding: 1rem;
border-radius: 2rem;
margin: 1rem;
background: #f7f2e8;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
position: relative;
backface-visibility: hidden;
transform-origin: top center;
`;

const TimerButtonContainer = styled.div`
display: flex;
justify-content: flex-start;
margin-bottom: 1rem;
`;

const TimerButton = styled.button`
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
background: #ede8de;
color: #956504;
text-transform: uppercase;
cursor: pointer;
transition: all 0.1s;
flex: 1 0 auto;
flex-wrap: wrap;

&:not(:last-child) {
	margin: 0 1rem 0 0;
}
&:focus {
	outline: none;
	color: black;
}
&:hover {
	background: #f5e7cc;
}
`;

const TimerCloseButton = styled.button`
color: #956504;
border: none;
position: absolute;
right: -.5em;
top: -.5em;
font-size: 1.5em;
background: #ede8de;
border-radius: 50%;
`;

const TimerName = styled.input`
font-weight: 600;
padding: 0.5rem 1rem;
margin: 0 0 1rem;
display: block;
border: none;
border-radius: 0.5rem;
background: none;
color: currentColor;
width: 100%;

&:focus {
	outline: none;
	background: white;
	color: black;
}
`;

const TimerDisplay = styled.div`
background: #f5e7cc;
color: #956504;
padding: 1rem 3rem;
font-size: 4rem;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
border-radius: 10px;
box-shadow: inset 2px 2px 2px rgba(0, 0, 0, 0.1);
border: ${props => props.className === "playing" ? "0.3rem solid #956504" : "0.3rem solid #f7f2e8"};
display: grid;
grid-template-rows: repeat(3, min-content);
grid-template-columns: repeat(3, min-content);
grid-gap: 1rem;
justify-content: center;
`;

const TimerSetTime = styled.button`
background: none;
border: none;
color: inherit;
line-height: 0em;
&:focus {
	outline: none;
	color: #000;
}
& svg {
	height: 25px;
}
`;

const TimerDisplayTime = styled.div`
line-height: 0.7em;
&::after {
	content: "${props => props.timeUnit}";
}
`;

const TimerTimesUpNotice = styled.div`
	position: absolute;
	color: #f5e7cc;
	background: #956504;
	z-index: 9;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
`;
