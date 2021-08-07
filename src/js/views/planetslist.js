import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export function PlanetsList() {
	const [planets, setPlanets] = useState([]);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			<div className="card-group">
				{planets.map((planets, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<img
								src="https://via.placeholder.com/400x200.png?text=Melissa"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{planets.name}</h5>
								<p className="card-text">
									<a href={"/people/" + planets.uid}>Planets Detail</a>
								</p>
								<a href={"/people/" + planets.uid} className="btn btn-primary">
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
