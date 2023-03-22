import _ from 'lodash';
import React from 'react';
import ReactDOM from "react-dom";

function component(){
    const element = document.createElement('div');
    // element.innerHTML = 'hello world';
    element.innerHTML = _.join(['hello', 'lodash'], ' ');
    return element;
}
document.body.appendChild(component());


ReactDOM.render(
    <h1>Hello, react!</h1>,
    document.getElementById('root')
  );
  