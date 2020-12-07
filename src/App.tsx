import React, { useEffect } from 'react';
import './scss/custom.scss';
import './App.css';
import Layout from './components/Layout';
import $ from 'jquery';
import Preview from './components/Preview';

interface Event extends JQuery.TriggeredEvent {
	clickEvent?: JQuery.ClickEvent
}

function App() {

	useEffect(() => {
		// hacking dropdown to get menu's behaviour
		$("#cart").on('hide.bs.dropdown', (evt: Event) => {
			if (evt.clickEvent) {
				const parents = $(evt.clickEvent.target).parents("ul.dropdown-menu");
				const cartsBeenClicked = parents.length !== 0;
				console.log(evt.clickEvent.target);
				console.log(parents);
				//console.log(`Cart's been clicked ${cartsBeenClicked}`);
				if (cartsBeenClicked) {
					evt.preventDefault();
					evt.stopPropagation();
				}
			}
		});
	}, []);

	return (
		<div className="App">
			<Layout />
			<Preview />
		</div>
	);
}

export default App;
