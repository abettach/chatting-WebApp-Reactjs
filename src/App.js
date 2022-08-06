import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Button } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useRef, useLayoutEffect } from 'react';
import axios from 'axios'
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
// import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home'
const endpoint = "https://api.graphql.jobs/";
const FILMS_QUERY = `
	{
		jobs {
			id
			title
		  }
	}
`;

function App() {
	// useEffect(() => {
	// 	axios.post(endpoint, {query: FILMS_QUERY})
	// 		.then( response => {
	// 			console.log(response.data.data)
	// 		});
	// },[])

  return (
    <div className="App">
      <Routes>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;