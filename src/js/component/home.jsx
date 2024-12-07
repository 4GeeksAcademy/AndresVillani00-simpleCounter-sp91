import React from "react";
import { Contador } from "./Contador.jsx";


//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center">
			<Contador/>
		</div>
	);
};

export default Home;
