import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPauseCircle, faPlayCircle, faTrashAlt, faUndoAlt } from '@fortawesome/free-solid-svg-icons'


export default function GlobalActions(props) {

	return (
		<GlobalActionsWrapper>
			<GlobalActionsMain>
				<GlobalActionsButton onClick={props.stopAll}>
					<GlobalActionsIcon icon={faPauseCircle} />
					Pause All
				</GlobalActionsButton>
				<GlobalActionsButton onClick={props.playAll}>
					<GlobalActionsIcon icon={faPlayCircle} />
					Play All
				</GlobalActionsButton>
				<GlobalActionsButton onClick={props.resetAll}>
					<GlobalActionsIcon icon={faUndoAlt} />
					Reset All
				</GlobalActionsButton>
				<GlobalActionsButton onClick={props.removeAll}>
					<GlobalActionsIcon icon={faTrashAlt} />	
					Remove All
				</GlobalActionsButton>
			</GlobalActionsMain>
		</GlobalActionsWrapper>
	)
}

const GlobalActionsWrapper = styled.div``;

const GlobalActionsMain = styled.div`
background: #f7f2e8;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
border-top: 3px solid #f5e7cc;
display: flex;
justify-content: center;
position: fixed;
bottom: 0;
left: 0;
width: 100%;
padding: 1rem;
z-index: 9;
font-size: 1rem;
color: #956504;
@media (min-width: 37.5em) {
	& {
		font-size: 1.6rem;
		justify-content: space-evenly;
	}
}
@media (min-width: 56.25em) {
	& {
		font-size: 2rem;
		justify-content: center;
	}
}
`;

const GlobalActionsButton = styled.button`
	display: block;
	background: none;
	border: none;
	padding: 0;
	color: #956504;
	text-transform: uppercase;
}
@media (min-width: 37.5em) {
	& {
		margin: 0 0.5rem;
		background-color: #ede8de;
		padding: 1rem 1.5rem;
		border-radius: 5px;
		flex-grow: 1;
		font-size: 1.4rem;
	}
}
`;

const GlobalActionsIcon = styled(FontAwesomeIcon)`
	font-size: 3rem;
	display: block;
	border: 3px solid #956504;
	padding: 1rem;
	border-radius: 1rem;
	margin: 0 1rem 0.5rem;
	box-sizing: content-box;
	
@media (min-width: 37.5em) {
	& {
		font-size: inherit;
		border: none;
		display: inline;
		padding: 0 1rem;
		margin: 0;
	}
}
`;

