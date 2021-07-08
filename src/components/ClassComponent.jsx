import React, { Component } from 'react';
import FunctionComponent from './FunctionComponent';
import girasol from '../img/girasol.png';
export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.imagen = "../img/girasol.png";
    }
  render() {
    return (
      <div> 
          
          <FunctionComponent
            imagen={this.imagen}/>
      </div>
    );
  }
}
