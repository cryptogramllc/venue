'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Properties from './components/Properties';
import Menu from  './components/Menu';
import Header from './components/Header';
import Tree from './components/Tree';
import Window from './components/Window';
import THREE from "three.js";





window.onload = () => {

    class Main extends React.Component{
		    constructor(props){
		    	super(props);
		    	// console.log(props);
		    	this.state = {
		    		projectName : "TestApp",
		    		projectDate : "today's date",
		    		TreeList : []
		    	};
		    	this.updateName = this.updateName.bind(this);
		    	this.updateDate = this.updateDate.bind(this);
		    	this.updateTreeList = this.updateTreeList.bind(this);
		    }
            
            updateName(event){
            	this.setState({
            		projectName : event.target.value
            	});
            }
            
            updateTreeList(event){

            	console.log('working');
            	var item = event.target.id;
            	var joined = this.state.TreeList.concat(item);
            	this.setState({ TreeList : joined });
            }

            updateDate(event){
            	this.setState({
            		projectDate: event.target.value.toString()
            	});
            }
 
		    render(){
				return (
					<section>	
					    <Menu 
                           triggerTreeListUpdate = {this.updateTreeList}
					    />
					    <Header
					      projectName = {this.state.projectName}
					      projectDate = {this.state.projectDate} 
					    />
						<div className="mainInner container"> 
							 <div className="mainWindow">
								  <div className="row">
									<Tree 
 									  treeList = {this.state.TreeList}
									/>
									<Window  id="container" />
									<Properties 
									    triggerNameUpdate = {this.updateName}
									    triggerDateUpdate = {this.updateDate}
								    />	
								  </div>					
							 </div>
						</div>
					</section>
				);
		    }
		    componentDidMount(){
	    	    var scene, camera, renderer;
			    var geometry, material, mesh;
			 
			    init();
			    animate();
			 
			    function init() {
			 
			        scene = new THREE.Scene();
			        
			        camera = new THREE.PerspectiveCamera( 75, 550 / 315, 1, 10000 );
			        camera.position.z = 500;
			 
			        geometry = new THREE.BoxGeometry( 200, 200, 200 );
			        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
			 
			        mesh = new THREE.Mesh( geometry, material );
			        scene.add( mesh );
			 
			        renderer = new THREE.WebGLRenderer();
			        renderer.setSize( 550, 315 );
			 
			        document.getElementById('container').appendChild( renderer.domElement );
			 
			    }
			 
			    function animate() {
			 
			        requestAnimationFrame( animate );
			 
			        mesh.rotation.x += 0.01;
			        mesh.rotation.y += 0.02;
			 
			        renderer.render( scene, camera );
			 
			    }
				 
	        }
	}

	ReactDOM.render(<Main />, document.getElementById('main'));

	

};