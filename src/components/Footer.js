import React, { useContext } from "react";
import styled from 'styled-components';
import { Context } from '../context/context.js';

const SendToDb = styled.button`
	background: #00aec9;
	color: #fff;
	cursor: pointer;
	margin-bottom: 50px;
	margin-left: 5px;
	margin-right: 5px;
	text-transform: uppercase;
	width: 25%;
	border-radius: 5px;
	height: 35px;
	border-color: transparent;
	box-shadow: 0px;
	outline: none;
	transition: 0.15s;
	text-align: center;
	&:active {
		background-color: #f1ac15;
	}
`;

const ClearDb = styled.button`
	background: red;
	color: #fff;
	cursor: pointer;
	margin-bottom: 50px;
	margin-left: 5px;
	margin-right: 5px;
	text-transform: uppercase;
	width: 25%;
	border-radius: 5px;
	height: 35px;
	border-color: transparent;
	box-shadow: 0px;
	outline: none;
	transition: 0.15s;
	text-align: center;
	&:active {
		background-color: #f1ac15;
	}
`;

const Footer = () => {
	const { updateDatabase } = useContext(Context);
	const { clearDatabase } = useContext(Context);
	// const { users } = useContext(Context);

	const update = () => {
		updateDatabase();
	}
	
	const clear = () => {
		clearDatabase();
	}

	return (
		<>
			<div className="Footer">
				<div className="db-handler-wrapper">
					<SendToDb onClick={update}>Update Database</SendToDb>
					<ClearDb onClick={clear}>Clear Database</ClearDb>
				</div>
				<p>😈Happy Hacking 😈</p>
				<p>⚡️Powered by the BOLT Team ⚡️</p>
			</div>
		</>
	);
}

export default Footer;
