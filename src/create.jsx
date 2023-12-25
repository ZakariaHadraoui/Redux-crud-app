import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userreducer';
import { useNavigate } from 'react-router-dom';


function Create() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const users = useSelector(state => state.users)

	const dispatch = useDispatch()
	const navigate = useNavigate();

	const handlesubmit = (e) => {
		e.preventDefault();

		dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));

		setName('');
		setEmail('');
		navigate('/');

	};

	return (
		<div>
			<form onSubmit={handlesubmit} className='container mt-4'>
				<h2>Add User</h2>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						className="form-control"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						className="form-control"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn mt-4 btn-primary">
					Add User
				</button>
				<h1>{name}</h1>
				<h1>{email}</h1>
			</form>
		</div>
	)
}

export default Create