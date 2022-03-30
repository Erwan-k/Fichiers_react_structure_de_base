import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import PagePrincipale from "./components/PagePrincipale.js";

function App = () =>{
	return(
		<Router>
			<Routes>
				<Route path="/" element={<PagePrincipale/>}/> 
			</Routes>
		</Router>
	)
}


export default App;