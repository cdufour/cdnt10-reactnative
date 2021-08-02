// Composant de classe
import React from 'react';

export class Counter extends React.Component {

  state = { 
    count: 0, 
    title: 'Counter Component',
    message: '' 
  }

  increment() {

    this.setState((state) => {

      let count = state.count + 1;

      if (count > 5) { // condition portant sur le nouvelle état
        return { message: 'Calme-toi !', count }
      } else {
        return { count } 
      }

    })

  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ 
        count: this.state.count - 1, 
        message: '' }
      )
    }
  }
  
  render() {
    
    return(
      <>
        <h3>{ this.state.title }</h3>
        <div>{ this.state.message }</div>
        <span>{ this.state.count }</span>
        <button onClick={ () => this.increment() }>+</button>
        <button onClick={ () => this.decrement() }>-</button>
      </>
    )
  }

}