import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { PeopleList } from "./peoplelist";
import { PlanetsList } from "./planetslist";
import { VehiclesList } from "./vehicleslist";
import { Navbar } from "../component/navbar";

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
