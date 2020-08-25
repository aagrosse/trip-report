import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import "./style.css"

function Buttons() {

    const [label, setLabel] = useState('Reports');
    const [href, setHref] = useState('/report');

    function changeButton (href){
 
    }

    return (
        <div id="button1">
            <Button
                variant="outline-dark"
                href={href}
                onclick= {changeButton(href)}
            >
                {label}</Button>{' '}
        </div>
    )
}

export default Buttons;