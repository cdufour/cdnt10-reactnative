// Composant de classe
import React from 'react';

export class Counter extends React.Component {

  state = { 
    count: 0, 
    title: 'Counter Component',
    message: '' 
  }

  step = 10;

  increment() {
    this.setState((state) => {
      let count = state.count + this.step;

      if (count > 5) { // condition portant sur le nouvelle état
        return { message: 'Calme-toi !', count }
      } else {
        return { count } 
      }
    }, () => console.log(this.state.count))

    ;
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ 
        count: this.state.count - this.step, 
        message: '' }
      )
    }
  }
  
  render() {

    const style = { marginLeft: this.state.count + 'px' };

    return(
      <>
        <h3 style={style}>{ this.state.title }</h3>
        <span>{ this.state.count }</span>
        <button onClick={ () => this.increment() }>+</button>
        <button onClick={ () => this.decrement() }>-</button>
        <span>{ this.state.message }</span>
      </>
    )
  }

}