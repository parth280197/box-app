import React from 'react';
import Box from './Box.js';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes:[]
    }
  }
  addBox = () => {
    this.setState(state => {
      const boxes = state.boxes.concat(Math.floor(Math.random() * 10 + 1));
      return {
        boxes,
      };
    })
  }
  
  removeBox = (removeIndex) => {
    this.setState(state => {
      const boxes = state.boxes.filter((box,index) => index !== removeIndex);

      return {
        boxes,
      };
    });
  }

  render() {
    return (
      <>
      <div className='addBox' onClick={this.addBox}>
        add box
      </div>
      <Box boxes={this.state} removeBox={this.removeBox}/>
      </>
    );
  }
}

export default App;
