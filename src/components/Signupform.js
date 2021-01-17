import React, { useContext, useState } from "react";
import styled from 'styled-components';
import Users from './Users.js';
import { Context } from '../context/context.js';

const Submit = styled.input.attrs({ type: 'submit' })`
	background: #00aec9;
	color: #fff;
	cursor: pointer;
	margin-bottom: 0;
	text-transform: uppercase;
	width: 100%;
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

const SignUpForm = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');

	const { addUser } = useContext(Context);

	const firstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	const lastNameChange = (e) => {
		setLastName(e.target.value);
	};

	const emailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addUser(firstName, lastName, email);
	};

	return (
		<>
			<div className="Main">
				<div className="SignUpWrapper">
					<form className="SignUp" onSubmit={handleSubmit}>
						<div className="SignUpItem">
							<label>First Name</label>
							<input
                            	className="form-control"
								placeholder="First Name"
								onChange={firstNameChange}
                            	required
                            	autoFocus
                        	/>
						</div>
						<div className="SignUpItem">
							<label>Last Name</label>
							<input
                            	className="form-control"
								placeholder="Last Name"
								onChange={lastNameChange}
                            	required
                            	autoFocus
                        	/>
						</div>
						<div className="SignUpItem">
							<label>Email</label>
							<input
            					type="email"
            					className="form-control"
								placeholder="Email Address"
								onChange={emailChange}
            					required
           						autoFocus
          					/>
						</div>
						<div className="SignUpItem">
							<Submit />
						</div>
					</form>
				</div>
				<div className="Separator"></div>
				<Users />
			</div>
		</>
	);
};

export default SignUpForm;

