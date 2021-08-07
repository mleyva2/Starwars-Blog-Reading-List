import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "./favoritescontext";

import { Context } from "../store/appContext";

export function VehiclesList() {
	const [vehicles, setVehicles] = useState([]);
	const favorites = useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehicles(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container-fluid">
			<div className="card-group">
				{vehicles.map((vehicles, index) => {
					return (
						<div key={index} className="card" style={{ width: "18rem" }}>
							<img
								src="https://via.placeholder.com/400x200.png?text=Melissa"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">{vehicles.name}</h5>
								<p className="card-text">
									<a className="btn btn-primary" href={"/vehicles/" + vehicles.uid} role="button">
										Learn More!
									</a>
									{favorites.favorites.includes(vehicles.name) ? (
										<button
											onClick={() => {
												favorites.setFavorites(
													favorites.favorites.filter(item => item !== vehicles.name)
												);
											}}
											type="button"
											className="btn btn-warning">
											<i className="far fa-heart" />
										</button>
									) : (
										<button
											onClick={() => {
												favorites.setFavorites([...favorites.favorites, vehicles.name]);
											}}
											type="button"
											className="btn btn-outline-warning">
											<i className="far fa-heart" />
										</button>
									)}
								</p>
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
