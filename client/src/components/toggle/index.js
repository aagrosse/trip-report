import React, { useState} from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';




function Toggle(props) {

    
    
    const [radioValue, setRadioValue] = useState('1');

    function changeTiles (e,props){
      // setRadioValue(e.currentTarget.value)
      // props.toggles(e.currentTarget.tile) 
    }
  
    const radios = [
      { name: 'Topo', value: '1', tile: true},
      { name: 'Satallite', value: '2', tile: false},
      
      
    ];
  
    return (
      <>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => changeTiles(e, props)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  
  export default Toggle; 