import React, { useState, useEffect } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';




function Toggle() {
    
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Satallite', value: '1' },
      { name: 'Topo', value: '2' },
      
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
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  
  export default Toggle; 