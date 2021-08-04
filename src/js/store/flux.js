const getState = ({ getStore, getActions, setStore }) => {
	var apiUrl = "https://www.swapi.tech/api/";
	return {
		store: {
			peopleListArray: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				getActions().fetchPeopleList();
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			fetchPeopleList: () => {
				fetch(`${apiUrl}/people`)
					.then(function(response) {
						setStore({ peopleListArray: response });
					})
					.catch(function(error) {
						console.log("Oh No! There was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
