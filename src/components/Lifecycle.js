//import React, { Component } from 'react'
import React, { PureComponent } from 'react'

export class LifeCycle extends PureComponent {

  // That is what react do step by step
  // 1- get default props
  //2- set the default state
  state = {
    title: 'life cycles'
  }
  //   //5 - after render
  //   componentDidMount(){
  //     console.log('5 after render');
  //     document.querySelector('h3').style.color = 'purple';
  //   }
  // //3- before render--this is always called before the render
  // componentWillMount(){
  //   console.log('3- before the render');
  //   // document.querySelector('h3').style.color = 'purple';
  // }

  // //-6 this one will run each time we re render
  // componentWillUpdate(){
    
  //   console.log('Before update')
  // }

  // //-7 comes after re render
  // componentDidUpdate(){
  //   console.log('After update');
  // }
  
  //8- for changes of the props and state-- return true or false
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log(this.state.title);
  //   console.log(nextState.title);
  //   if(nextState.title === 'Title in the render step 4e'){
  //     return false;
  //   }
  //   return false;
  // }
  // ---pure component tutorial -- they stop you to reloading if the state is the same
  // shouldComponentUpdate(nextProps, nextState){
      
  //     if(nextState.title === this.state.title){
  //       return false;
  //     }
  //     return true;
  //   }
   
  // //9- component
  // componentWillReceiveProps(){
  //   console.log('BEFORE RECEIVE PROPS ');
  // }

  // //10 Un mount
  // componentWillUnmount(){
  //     console.log('UNMOUNT');

  // }


  //4- render  jxs-- each time we setstate SPA will re-render the whole render

  render() {
    console.log('RENDER');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={
          () => this.setState({title: 'something else'})
        }> CLICK TO CHANGE</div>
      </div>
    )
  }
  // //5 - after render
  // componentDidMount(){
  //   console.log('5 after render');
  // }
}

export default LifeCycle
