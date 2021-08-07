import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<button
					className="navbar-brand mb-0 h1"
					img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className="ml-auto">
				<a className="navbar-brand" href="#">
					TEST
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="navbarNavDropDown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>

				<Link to="/people">
					<button className="btn btn-primary">Check the people list</button>
				</Link>
				<Link to="/people/:id">
					<button className="btn btn-primary">Check the person detail page</button>
				</Link>
			</div>
		</nav>
	);
};
