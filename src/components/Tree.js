'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


export default class Tree extends React.Component {
	constructor(props){
		super(props);
		console.log(props);

	}
	render() {
		const list = this.props.treeList;
		const listItems = list.map((item) => 
           <li> {item} </li>
		);
		return (

			<div className="col bg-light p-3 mr-1">
				<h5 className="text-info"> Tree </h5>
				<div className="proptertiesTree">
				  <span> Venue </span>
				  <ul> {listItems} </ul>
				</div>
			</div>
		);
	}
}
  

