import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
function UsersMaster() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => setUsers(data));
	});

	return (
		<>
			<h1>USUARIOS</h1>
			<ul>
			{users.map((u) => (
				<li key={u.id}>
					<Link to={`./user/${u.id}`}>
					{u.id} - {u.name} 
					</Link> 
				</li>
			))}
		</ul>

		</>
	);
}

export default UsersMaster;