import React, { useState } from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'


export default function Adder(props) {

	const [newTimerName, setNewTimerName] = useState("");

	const handleAdderTextFieldChange = (e) => {
		setNewTimerName(e.target.value);
	}

	const tomatoWork = {
		timerName: "Tomato Work",
		isRunning: true,
		direction: -1,
		cumulativeAmount: 1000 * 60 * 25,
		onComplete: ()=>{
			props.addTimer(tomatoBreak)
		},
	}

	const tomatoBreak = {
		timerName: "Tomato Break",
		isRunning: true,
		direction: -1,
		cumulativeAmount: 1000 * 60 * 5,
	}

	const handleButtonClick = (setRunning) => {
		props.addTimer({ 
			timerName: newTimerName, 
			isRunning: setRunning, 
			direction: 1,
			cumulativeAmount: 0,
		 });
		setNewTimerName("");
	}

	const handleAdderTextFieldKeyDown = (e) => {
		if(e.code === "Enter" || e.code === "NumpadEnter"){
			handleButtonClick(true);
		}
	}

	return (
		<AdderWrapper>
			<AdderMain>
				<AdderTextfield onChange={handleAdderTextFieldChange} type="textfield" placeholder="Timer Name" value={newTimerName} onKeyDown={handleAdderTextFieldKeyDown}>
				</AdderTextfield>
				<AdderButton onClick={() => { handleButtonClick(false) }}>Add</AdderButton>
				<AdderButton onClick={() => { handleButtonClick(true) }}>Add and Start</AdderButton>
				<AdderButton onClick={() => { props.addTimer(tomatoWork) }}>
					<FontAwesomeIcon icon={faAppleAlt} />
				</AdderButton>
			</AdderMain>
		</AdderWrapper>
	)
}

const AdderWrapper = styled.div`
position: sticky;
z-index: 9;
top: 0;
left: 0;
width: 100%;
font-size: 1.6rem;
`;

const AdderMain = styled.div`
	padding: 1rem;
	display: flex;
	flex-wrap: wrap;
	background: #f7f2e8;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
	border-bottom: 3px solid #f5e7cc;
	gap: 1rem;

@media (min-width: 37.5em) {
	& {
	}
}
`;

const AdderButton = styled.button`
cursor: pointer;
transition: all 0.1s;
color: #956504;
background: #ede8de;
border: none;
padding: 1rem 1.5rem;
background-color: #ede8de;
border-radius: 5px;
display: block;

@media (min-width: 56.25em) {
	& {
	}

}
&:focus {
	outline: none;
}
&:active {
	transform: translateY(1px);
	box-shadow: none;
}
`;


const AdderTextfield = styled.input`
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
flex-grow: 1;
display: block;

&::placeholder {
	color: #ccc;
}
@media (min-width: 37.5em) {
	& {
	}
}
`;
