'use strict';

import React from 'react';
import ReactDOM from 'react-dom';


export default class Menu extends React.Component {

 constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      menu: null
    }    

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  

  componentWillMount() {
    // add event listener for clicks
      document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    // make sure you remove the listener when the component is destroyed
      document.removeEventListener('click', this.handleClick, false);
  }



  handleClick() {
    this.setState({menu: null});
  }

  toggle(event) {
    console.log(this.props);
    console.log(event.target.id);
    this.setState({menu: event.target.id});
  }

	render() {
    console.log(this.state.menu);
		return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                  <a className="nav-link" id="file" onClick={this.toggle} href="#">File<span className="sr-only">(current)</span></a>
                    <div className={this.state.menu == 'file' ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">New Venue</a>
                      <a className="dropdown-item" href="#">Save / Save as</a>
                      <a className="dropdown-item" href="#">Publish</a>
                      <a className="dropdown-item" href="#">Open</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="edit" onClick={this.toggle}>Edit</a>
                  <div className={this.state.menu == 'edit' ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Cut</a>
                      <a className="dropdown-item" href="#">Copy</a>
                      <a className="dropdown-item" href="#">Paste</a>
                    </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">View</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Insert</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Format</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Arrange</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Layer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Tools</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Options</a>
                </li>
                <li className="nav-item dropdown">
                   
                </li>
              </ul>
            </div>
          </nav>
		);
	}
};
  
