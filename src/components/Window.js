'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


export default class Window extends React.Component {
	render() {
		return (
			<div className="col-6 bg-light p-3 mx-1">
				<h5 className="text-info"> Window </h5>
                <div id= "container"></div>
			</div>
		);
	}
}
  
