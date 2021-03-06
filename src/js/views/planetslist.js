import React, { useState, useContext } from "react";

import { FavoritesContext } from "./favoritescontext";

import "../../styles/styles.css";

export function PlanetsList() {
	const [planets, setPlanets] = useState([]);
	const f = useContext(FavoritesContext);

	React.useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/")
			.then(res => res.json())
			.then(data => setPlanets(data.results))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-10 pt-3">
					<h1>Planets</h1>
				</div>
				<div className="col-2 py-3 d-flex justify-content-end">
					<button className="btn btn-outline-secondary mx-3">
						<i className="fas fa-chevron-left fa-lg" />
					</button>
					<button className="btn btn-outline-secondary">
						<i className="fas fa-chevron-right fa-lg" />
					</button>
				</div>
			</div>
			<div className="col d-inline-flex w-100 h-auto">
				<div className="scrolling-wrapper-flexbox">
					{planets.map((planet, index) => {
						return (
							<div key={index} className="col-4">
								<div key={index} className="card">
									<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<p className="card-text" />
										<div className="row justify-content-between px-2">
											<a
												className="btn btn-primary"
												href={"/planets/" + planet.uid}
												role="button">
												Learn More!
											</a>
											{f.favorites.includes(planet.name) ? (
												<button
													onClick={() => {
														f.setFavorites(
															f.favorites.filter(item => item !== planet.name)
														);
													}}
													type="button"
													className="btn btn-warning">
													<i className="far fa-heart" />
												</button>
											) : (
												<button
													onClick={() => {
														f.setFavorites([...f.favorites, planet.name]);
													}}
													type="button"
													className="btn btn-outline-warning">
													<i className="far fa-heart" />
												</button>
											)}
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
