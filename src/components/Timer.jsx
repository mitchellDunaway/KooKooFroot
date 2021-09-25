import React from "react";
import TimerButton from "./TimerButton";
import Icon from "./Icon";
import Counter from "../scripts/Counter";

export default function Timer() {
	return (
		<div className="timer timer--appear" id="timer-0">
			<input
				type="textfield"
				name="timer__textfield"
				className="timer__name"
			></input>
			<div className="timer__button-container">
				<TimerButton button_name="button">start</TimerButton>
				<TimerButton button_name="button">reset</TimerButton>
				<TimerButton button_name="button">remove</TimerButton>
			</div>
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
