import * as React from "react";

export default class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			initialDate: new Date(),
			currentDate : new Date(),
			intervalDate : new Date(0),
			cumulativeDate : new Date(0),
			totalDate : new Date(0),
			running : false,
		};
	}

	// this is called when the counter is started, stopped, or reset
	// it sets the "interval" to zero and sets the initial and current dates to now.
	// this is a state update
	beginNewInterval = function () {
		initialDate = new Date;
		currentDate = new Date;
		intervalDate = new Date(0);
	}

	// this should run every ms while the counter is running
	// this should be a delta function
	runCounter = function () {
		currentDate = new Date();
		intervalDate.setTime(currentDate.getTime() - initialDate.getTime());
		updateTotalDate();
		if (running) {
			setTimeout(runCounter, 1);
		}
	}

	// okay, I've removed the display update stuff
	// now all this does is update totalDate ... which should be done before the the total date is printed...hmm
	// I'm changing the name to update totalDate
	// this is a state update now though
	updateTotalDate = function () {
		if (totalDate) {
			totalDate.setTime(cumulativeDate.getTime() + intervalDate.getTime());
		} else {
			totalDate = new Date(0);
		}
	}
	
	// this is called when the counter is stopped
	// it takes whatever was the total time when the timer was stopped and sets that as the new cumulative
	// this is a state update
	updateCumulative = function () {
		cumulativeDate.setTime(totalDate.getTime());
	}

	// this is called when the counter is reset
	// it sets the cumulative time back to zero
	// this is a state update
	resetCumulativeDate = function () {
		cumulativeDate = new Date(0);
	}



	// returns the status of the counter
	getRunning = function () {
		return running;
	}




	render() {
		return (
			<>
				<div className="timer__display-time timer__hoursDisplay">
					{totalDate.toISOString().substr(11, 2)}
				</div>
				<div className="timer__display-time timer__minutesDisplay">
					{totalDate.toISOString().substr(14, 2)}
				</div>
				<div className="timer__display-time timer__secondsDisplay">
					{totalDate.toISOString().substr(17, 2)}
				</div>
			</>
		)
	};
}
