import React from "react";
import "./App.css";

const App: React.FC = () => {
	function calculateTotalPrice(quantity: number): number {
		return quantity * 10 + 5;
	}

	calculateTotalPrice(5);
	return (
		<>
			<h1>Vite + React</h1>
			<div className="card">
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
};

export default App;
