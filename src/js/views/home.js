import React, { useContext } from "react";
import "../../styles/home.scss";

import { PeopleList } from "./peoplelist";
import { PlanetsList } from "./planetslist";
import { VehiclesList } from "./vehicleslist";

export const Home = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<PeopleList />
			</div>
			<div className="row">
				<PlanetsList />
			</div>
			<div className="row">
				<VehiclesList />
			</div>
		</div>
	);
};
