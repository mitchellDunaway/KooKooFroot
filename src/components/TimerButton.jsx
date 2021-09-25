import React from "react";


const TimerButton = (props) => {
	
	const buttonName = `timer__${props.button_name}`;


	return (
		<button className={buttonName}>
			{props.children}
		</button>
	)
}

export default TimerButton;