// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return 'Click on me!';
}


// Create a react component
const App = function(){
    const buttonText = 'Click Me!';
    return(
        <div>
            <label className="lable" for="name"> Enter name:</label>
            <input id="name" type="text"></input>
            <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText}</button>
            <button style={{ backgroundColor: "blue", color: "white" }}>{getButtonText()}</button>
         </div>
    );
}

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,document.querySelector('#root')
);