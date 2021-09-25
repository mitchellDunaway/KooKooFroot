import React from "react";
import TimerButton from "./TimerButton";
import Icon from "./Icon";
import Counter from "./Counter";

export default function Timer() {


	// this is called when the start button is pressed
	// there is a boolean that tells runCounter whether to call itself again or not. 
	start = function (event) {
		running = true;
		beginNewInterval();
		runCounter();
	}

	// this is called when the stop button is pressed
	// runCounter will no longer call itself
	stop = function (event) {
		running = false;
		updateCumulative();
		beginNewInterval();
		updateTotalDate();
	}

	// this is called when the reset button is pressed
	// it zeros out the counter but does not effect the playing status
	reset = function () {
		beginNewInterval();
		resetCumulativeDate();
		updateTotalDate();
	}


	return (
		<div className="timer__button-container">
			<TimerButton button_name="button">start</TimerButton>
			<TimerButton button_name="button">reset</TimerButton>
			<TimerButton button_name="button">remove</TimerButton>
		</div>
	);
}
