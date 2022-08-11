import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home'
import useFetch from './components/useFetch';
import { useEffect } from 'react';
function App() {
	// const {data, loading, error} = useFetch('/api')
	// console.log(data);
	return (
	  <div className="App">
	    <Routes>
	      <Route exact path="/login" element={<Login />}/>
	      <Route exact path="/signup" element={<Signup />}/>
	      <Route exact path="/" element={<Home />}/>
	      <Route exact path="/:id" element={<Home />}/>
	    </Routes>
	  </div>
	);
}

export default App;