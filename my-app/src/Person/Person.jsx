import React from 'react';
// import './App';

 class Person extends React.PureComponent{

// }

//const person = (props) => {
    render(
     return (
        <div>
            <p onClick={props.click}> i am {props.name} i am at {props.power} power level</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    ));
    }

export default person;