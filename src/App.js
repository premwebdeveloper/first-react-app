import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ShowAlert from './components/ShowAlert';
import {
	BrowserRouter as Router,
	Routes ,
	Route,
	Link
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
	
	const [mode, setMode] = useState('light');

	const toggleMode = ()=>{
		if(mode === 'light'){
			setMode('dark')
			document.body.style.backgroundColor = '#092a4b'
			ShowAlertMessage('Dark mode enabled successfully.', 'success');
		}else{
			setMode('light')
			document.body.style.backgroundColor = 'white'
			ShowAlertMessage('Light mode enabled successfully.', 'success');
		}		
	}

	const [alert, setAlert] = useState(null)

	const ShowAlertMessage = (message, type)=>{
		setAlert({
			message: message,
			type: type
		})

		setTimeout(() => {
			setAlert(null)
		}, 1500);
	}

  	return (
		<>
			<Router>
				<Navbar title="My First React App" mode={mode} toggleMode={toggleMode}/>
				<ShowAlert alert={alert} />
				<div className="container my-5">
					<Routes>
						<Route exact path="/" element={<TextForm ShowAlertMessage={ShowAlertMessage} heading="Please fill the form for you job." mode={mode}/>} />
						<Route exact path="/about" element={<About />} />
						<Route exact path="/contact" element={<Contact />} />
					</Routes>
				</div>
			</Router>
		</>
  	);
}

export default App;