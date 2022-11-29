import React, { Component } from 'react';
import background from './axe.webp'
import './Main.css'
class Main extends Component {
    render() {
        return (
            <div className='Main-main' style={{ backgroundImage: `url(${background})` }}>
               
            </div>
        );
    }
}

export default Main;