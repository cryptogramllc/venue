'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


export default class Properties extends React.Component {
    constructor(props){
        super(props);
    }


	render() {
		return (
			<div className="col bg-light p-3 ml-1">
				<h5 className="text-info"> Properties </h5>
                <form>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon1">Name</span>
                      <input type="text" onChange={this.props.triggerNameUpdate} className="form-control" aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                    <br></br>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">Datum</span>
                      <input type="date" onChange={this.props.triggerDateUpdate} className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                    </div>
                    <br></br>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">Created</span>
                      <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"></input>
                    </div>
                    <br></br>
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon2">Base URL</span>
                      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                    </div>
                    <br></br>
                </form>
			</div>
		);
	}

}


