import React from 'react';
import './App.css';
import Header from './components/Header';
import Left from './components/Left';
import Right from './components/Right';
import Mid from './components/Mid';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
    return (
	  	<Router>
	  	    <Route exact path="/">
			  	<Header/>
			    <div className="vv">
			        <div className="left">
			             <Left/>
			        </div>
			        <div className="mid">
			            <Mid/>
			        </div>
			        <div className="right">
			            <Right/>
			        </div>
			    </div>
			</Route> 
		</Router>   
    )
}

export default App;
