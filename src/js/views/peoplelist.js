import React from "react";

export function PeopleList() {
	let abc = [{ key1: "value1" }, { key2: "value2" }, { key3: "value3" }];
	return abc.map((person, i) => {
		return (
			<div key={i} className="card" style={{ width: "18rem" }}>
				<img src="https://via.placeholder.com/400x200.png?text=Melissa" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the card&apos;s
						content.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
}
