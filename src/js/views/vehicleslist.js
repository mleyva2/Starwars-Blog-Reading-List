import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

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
									<a href={"/people/" + vehicles.uid}>Vehicles Detail</a>
								</p>
								<a href={"/people/" + vehicles.uid} className="btn btn-primary">
									Learn more!
								</a>
                                    <button onClick={() =>{
                                        favorites.setFavorites([...favorites.favorites, vehicles.name])
                                    }}

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
