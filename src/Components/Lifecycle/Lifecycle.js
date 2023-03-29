import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(){
        super()
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentDidMount")
    }
  render() {
    console.log("render")
    return (
      <div>Lifecycle</div>
    )
  }
}

export default Lifecycle