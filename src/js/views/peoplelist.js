import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export function PeopleList() {
	const [people, setPeople] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPeople(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			<div className="card-group">
				{people.map((person, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<img
								src="https://via.placeholder.com/400x200.png?text=Melissa"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">
									<a href={"/people/" + person.uid}>People Detail</a>
								</p>
								<a href={"/people/" + person.uid} className="btn btn-primary">
									Learn more!
								</a>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
