import React from "react";
import TimerButton from "./TimerButton";
import Icon from "./Icon";
import Counter from "./Counter";
import TimerControls from "./TimerControls";

export default function Timer() {


	// the following are called by the increment / decrement buttons in the Timer
	// they affect the state of the Counter

	incrementHours = function () {
		cumulativeDate.setHours(cumulativeDate.getHours() + 1);
		printTotal();
	}

	decrementHours = function () {
		cumulativeDate.setHours(cumulativeDate.getHours() - 1);
		printTotal();
	}

	incrementMinutes = function () {
		cumulativeDate.setMinutes(cumulativeDate.getMinutes() + 1);
		printTotal();
	}

	decrementMinutes = function () {
		cumulativeDate.setMinutes(cumulativeDate.getMinutes() - 1);
		printTotal();
	}

	incrementSeconds = function () {
		cumulativeDate.setSeconds(cumulativeDate.getSeconds() + 1);
		printTotal();
	}

	decrementSeconds = function () {
		cumulativeDate.setSeconds(cumulativeDate.getSeconds() - 1);
		printTotal();
	}


	return (
		<div className="timer timer--appear" id="timer-0">
			<input
				type="textfield"
				name="timer__textfield"
				className="timer__name"
			></input>
			<TimerControls />
			<div className="timer__display">

				<TimerButton button_name="set-time">
					<Icon icon="fa-caret-up" />
				</TimerButton>
				<TimerButton button_name="set-time">
					<Icon icon="fa-caret-up" />
				</TimerButton>
				<TimerButton button_name="set-time">
					<Icon icon="fa-caret-up" />
				</TimerButton>

				<Counter />

				<TimerButton button_name="set-time">
					<Icon icon="fa-caret-down" />
				</TimerButton>
				<TimerButton button_name="set-time">
					<Icon icon="fa-caret-down" />
				</TimerButton>
				<TimerButton button_name="set-time">
					<Icon icon="fa-caret-down" />
				</TimerButton>

			</div>
		</div>
	);
}
