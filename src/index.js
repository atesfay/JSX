// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click function!';
}


// Create a react component
const App = function(){
    const buttonText = 'Click Me!';
    const buttonTextValue = {text: 'Click Key : Value!'};
    return(
        <div>
            <label className="lable" htmlFor="name"> Enter name:</label>
            <input id="name" type="text"></input>
            <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText}</button>
            <button style={{ backgroundColor: "blue", color: "white" }}>{buttonTextValue.text}</button>
            <button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
         </div>
    );
}

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,document.querySelector('#root')
);