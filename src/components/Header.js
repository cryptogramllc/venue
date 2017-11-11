'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
   constructor(props){
   	 super(props);
     console.log(props);
   }


	render() {
		
		return (
			<div className="header">
				<div className="jumbotron jumbotron-fluid">
				      <div className="container">
				        <h1 className="display-3" > {this.props.projectName} </h1>
				        <span> {this.props.projectDate} </span>
				        <p className="lead">Prototype for Venue Vista</p>
				      </div>
				</div>
			</div>
		);
	}



    

};
  