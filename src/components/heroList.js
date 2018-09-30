import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterById} from '../actions';
import {removeCharacterById} from '../actions';
import '../styles/index.css';



class heroList extends Component{
	render(){

		return(
			<div>
			<h4>mySquad</h4>
			 <ul className ="list-group">
			 {
			 	this.props.heroes.map(hero=>{
			 		return(
			 			<li key ="hero.id" className="list-group-item">
			 			<div className="list-item ">{hero.name}</div>
			 			<div className="list-item right-button" onClick={()=> this.props.removeCharacterById(hero.id)} >  x</div>
			 			</li>
			 		)
			 	})
			 }
			 </ul>
			</div>

			)
	}
}


function mapStateToProps(state){
	return{ heroes:state.heroes};
}


export default connect(mapStateToProps,{removeCharacterById  })(heroList);