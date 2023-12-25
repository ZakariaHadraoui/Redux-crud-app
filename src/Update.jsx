import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './userreducer';

function Update() {
	const { id } = useParams();
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const users = useSelector(state => state.users);
	const existinguser = users.filter(user => user.id === Number(id));
	const { name = '', email = '' } = existinguser[0] ?? {};

	const [unname, setName] = useState(name);
	const [unemail, setEmail] = useState(email);
	function handlesubmit(e) {
		e.preventDefault()
		dispatch(updateUser({
			id: id,
			name: unname,
			email: unemail
		}))
		navigate('/')

	}

	return (
		<div>
			<form onSubmit={handlesubmit} className='container mt-4'>
				<h2>Edit User</h2>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						value={unname}
						className="form-control"
						required
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={unemail}
						className="form-control"
						required
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn mt-4 btn-primary">
					Confirm Edit
				</button>
			</form>
		</div>
	);
}

export default Update;
