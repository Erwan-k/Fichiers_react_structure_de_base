import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import PagePrincipale from "./components/PagePrincipale.js";

const App = () =>{
	return(
		<Router>
			<Routes>
				<Route path="/" element={<PagePrincipale/>}/> 
			</Routes>
		</Router>
	)
}


export default App;