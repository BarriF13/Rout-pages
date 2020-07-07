import React, { Component } from 'react'

export class LifeCycle extends Component {

  // That is what react do step by step
  // 1- get default props
  //2- set the default state
  state = {
    title: 'life cycles'
  }
    //5 - after render
    componentDidMount(){
      console.log('5 after render');
      document.querySelector('h3').style.color = 'purple';
    }
  //3- before render--this is always called before the render
  componentWillMount(){
    console.log('3- before the render');
    // document.querySelector('h3').style.color = 'purple';
  }


  //4- render  jxs

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    )
  }
  // //5 - after render
  // componentDidMount(){
  //   console.log('5 after render');
  // }
}

export default LifeCycle
