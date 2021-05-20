// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = function(){
    return(
        <div>
            <label class="lable" for="name"> Enter name:</label>
            <input id="name" type="text"></input>
            <button style={{ backgroundColor: "blue", color: "white" }}>Sumbit</button>
         </div>
    );
}

// Take the react component and show it on the screen

ReactDOM.render(
    <App />,document.querySelector('#root')
);