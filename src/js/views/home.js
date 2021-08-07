import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { PeoplePage } from "./peoplepage";
import { VehiclesPage } from "./vehiclespage";
import { PlanetsPage } from "./planetspage";
import { FavoritesContext } from "./favoritescontext";

export const Home = () => {
	const favorites = useContext(FavoritesContext);

	return (
		<div>
			<img
				className="starWarsLogo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
			/>
			<div className="allCategories">
				<div className="peopleCard">
					<h1>People</h1>
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="/people" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="vehiclesCard">
					<h1>vehicles</h1>
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="/vehicles" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
				<div className="planetsCard">
					<h1>Planets</h1>
					<div className="card">
						<img src="..." className="card-img-top" alt="..." />
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a href="/planets/" className="btn btn-primary">
								Go somewhere
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
