import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state ={
    persons:[
      {name : 'dave', power: '18'},
      {name : 'Adrian', power: '48'},
      {name : 'Jake', power: '22'}
    ],
    otherstate: 'some values here that wont change',
    showComp : false,
    people:[
      {name : 'dave', power: '18', id: 1},
      {name : 'Adrian', power: '48', id: 2},
      {name : 'Jake', power: '22', id: 3}
    ]
  }

  switchNameHandler = () =>{
    console.log('twas clicked')
    // this.state.persons[0].name = 'David' dont do this do not mutate
    this.setState({
      persons: [
        {name : 'David', power: '18'},
        {name : 'Adriano', power: '48'},
        {name : 'Jaker', power: '22'}
      ]
    })
  }

  deleteComp = (arrayIndex) =>{
    // const newPerson = this.state.people; dun do this, no need mutate
    // const newPerson = this.state.people.slice(); this is a good one
    const newPerson = [...this.state.people]
    newPerson.splice(arrayIndex, 1);
    this.setState({people: newPerson})
  }

  toggleComponent = () => {
    let show = this.state.showComp;
    this.setState({
      showComp : !show
    })
 }

  onNameChange = (event) =>{
    this.setState({
      persons:[
        {name : event.target.value, power: '18'},
        {name : event.target.value, power: '48'},
        {name : event.target.value, power: '22'}
      ]
    })
  }

  SwitchHadlerData = (nameData) =>{
    this.setState({
      persons: [
        {name: nameData, power: '1000'},
        {name: nameData, power: '4000'},
        {name: nameData, power: '9000'}
      ]
    })
  }

  render(){

    let comps = null;
    
    if(this.state.showComp){
      comps = (
        <p>the new hide and show text</p>
      )
    }
    
    let hide = null;
  
    if (this.state.showComp){
      hide = (
        <div>
          {this.state.people.map( (indi, index) => {
            return <Person
                name = {indi.name}
                power = {indi.power}
                click = {() => this.deleteComp(index)}
                key = {indi.id}
              />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>meow</h1>
        <p> This actually works </p>
        <Person name="syd" power="32" />
        <Person name="Dave" power="22" >I AM IRON MAN!!!</Person>
        <Person name="Roger" power="62" />
        <hr/>
          <button onClick={this.switchNameHandler}>Switch Names static</button>
          <button onClick={this.SwitchHadlerData.bind(this, 'Richard')}>Switch Names dynamic</button>
          <button onClick={() => this.SwitchHadlerData('Aaron')}>Switch Names Different</button>
          <button onClick={this.toggleComponent}>hide show</button>
          <button onClick={this.toggleComponent}>hide show otherway</button>
        <hr/>
        <Person 
          name={this.state.persons[0].name} 
          power={this.state.persons[0].power}
          click={this.switchNameHandler} />
        <Person 
          name={this.state.persons[1].name} 
          power={this.state.persons[1].power} 
          change = {this.onNameChange}
          />
        <Person 
          name={this.state.persons[2].name} 
          power={this.state.persons[2].power} />
          <hr/>
        <div>
          { 
            this.state.showComp === true ?
            <p>the appear/disappear text area</p>
            : null
          }
        </div>
          {comps}
          <hr/>
          {hide}
      </div>
    );
      // return React.createElement('div', null, 'h1', 'this is a react app');
      // parent elemnent, properties or configurations, then children and their stuff
      // wont work as nested element are treated as text
      // return React.createElement('div', null, React.createElement('h1', null, 'now should work'));
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'now should work'));
}
}

export default App;
