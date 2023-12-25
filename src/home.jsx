import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './userreducer';

function Home() {
	const users = useSelector(state => state.users);
	const dispatch = useDispatch()
	function handledelete(id) {
		dispatch(deleteUser(id))

	}

	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-8">
					<div className="card">
						<div className="card-header">
							<h4>Users List</h4>
							<Link to='/create' className="btn btn-success m-2">Create +</Link>

						</div>
						<div className="card-body">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Email</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{users.map(user => (
										<tr key={user.id}>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>
												<Link to={`/edit/${user.id}`} className="btn btn-primary m-2">Edit</Link>
												<button onClick={() => handledelete(user.id)} className="btn btn-danger m-2">Delete</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
