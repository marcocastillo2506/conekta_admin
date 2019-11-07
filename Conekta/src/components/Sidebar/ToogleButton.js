import React from 'react';

import './ToggleButton.css'

const toogleButton = props => (
  <button className="toogle-button" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default toogleButton;
