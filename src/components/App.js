import React ,{Component}from 'react';

import CharacterList from './characterList';
import HeroList from './heroList';
import '../styles/index.css';
import SquadStats from './squadStats';



class App extends Component{


	render(){

		return(
		   
			<div className="App conatiner">
				<h2> SuperSquad </h2>
				<div className=" col-lg 4 col-md-4 col-sm-12">
					<CharacterList/>
				</div>
				<div className=" col-lg 4 col-md-4 col-sm-12">
					<HeroList />
				</div>
				<div className=" col-lg 4 col-md-4 col-sm-12">
					<SquadStats />
				</div>
			</div>
			
			)
	}
}


export default App;