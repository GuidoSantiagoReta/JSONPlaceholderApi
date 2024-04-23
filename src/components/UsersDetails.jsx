import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css"

function UsersDetails() {
    const [user, setUser] = useState({});
    const { id } = useParams();

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((response) => response.json())
			.then((data) => setUser(data));
	}, [id]);
	

	return (
        <div>
            <h1>{user.id}</h1>
            <p>{user.name}</p>
			<p>{user.username}</p>
            <p>{user.email}</p>
        </div>
	);
}

export default UsersDetails;
