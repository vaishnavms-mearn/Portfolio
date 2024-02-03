import React from 'react'
import { ReactComponent as Sun } from "../Assets/images/Sun.svg";
import { ReactComponent as Moon } from "../Assets/images/Moon.svg";
function Toggle({ handleChange, isChecked }) {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={handleChange}
                checked={isChecked}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    )
}

export default Toggle