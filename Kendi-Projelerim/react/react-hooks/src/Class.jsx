import React, { Component } from 'react';

class MyClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yazi: ''
    };
  }

  keyHandler = (event) => {
    if (event.key === 'Enter') {
      this.setState({ yazi: document.querySelector(".deneme").value  });
      
    }
  };

  render() {
    return (
      <>
        <input className='deneme' onKeyDown={this.keyHandler}></input>
        <h1>{this.state.yazi}</h1>
        
      </>
    );
  }
}

export default MyClass;
