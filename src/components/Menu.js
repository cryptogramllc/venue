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
    this.closeMenu = this.closeMenu.bind(this);
    // this.handleHover = this.handleHover.bind(this);
  }
  
  closeMenu(){
       this.setState({menu:null});
  }
  // componentWillMount() {
  //   // add event listener for clicks
  //     document.addEventListener('mouseover', this.handleHover, false);
  // }

  // componentWillUnmount() {
  //   // make sure you remove the listener when the component is destroyed
  //     document.removeEventListener('mouseover', this.handleHover, false);
  // } 


  // handleHover(event) {
  //     console.log(this.state.overMenu);
  //     this.setState({menu: null, overMenu: false});
   
  // }

  toggle(event) {
    console.log(event.target.id);
    this.setState({menu: event.target.id});
  }
   // on mouse over show menu
   // on mouse leave hide menu <-- unlesss mouse is on menu.

  

	render() {
		return (
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark" onMouseLeave={this.closeMenu}>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ">
                <li className="nav-item dropdown">
                  <a className="nav-link" id="file" onMouseOver={this.toggle} href="#">File<span className="sr-only">(current)</span> </a>
                  <div className={(this.state.menu == 'file')? "dropdown-menu show" : "dropdown-menu"} 
                      aria-labelledby="navbarDropdownMenuLink" >
                    <a className="dropdown-item" href="#">New Venue</a>
                    <a className="dropdown-item" href="#">Save / Save as</a>
                    <a className="dropdown-item" href="#">Publish</a>
                    <a className="dropdown-item" href="#">Open</a>
                  </div>
                 
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="edit" onMouseOver={this.toggle}>Edit</a>
                  <div className={(this.state.menu == 'edit') ? "dropdown-menu show" : "dropdown-menu"} 
                       aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Cut</a>
                      <a className="dropdown-item" href="#">Copy</a>
                      <a className="dropdown-item" href="#">Paste</a>
                    </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="view" onMouseOver={this.toggle} href="#">View</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" id="insert" onMouseOver={this.toggle}  href="#">Insert</a>
                  <div className={(this.state.menu == 'insert') ? "dropdown-menu show" : "dropdown-menu"} 
                     aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Boundary</a>
                    <a className="dropdown-item" href="#">Traversal</a>
                    <a className="dropdown-item" href="#">Area</a>
                    <a className="dropdown-item" href="#">Floor</a>
                    <a className="dropdown-item" href="#">Zone</a>
                    <a className="dropdown-item" href="#">Amenity</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="format" onMouseOver={this.toggle} href="#">Format</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="arrange" onMouseOver={this.toggle}  href="#">Arrange</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="layer" onMouseOver={this.toggle} href="#">Layer</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="tools" onMouseOver={this.toggle} href="#">Tools</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="options" onMouseOver={this.toggle} href="#">Options</a>
                </li>
                <li className="nav-item dropdown">
                   
                </li>
              </ul>
            </div>
          </nav>
		);
	}
};
  
