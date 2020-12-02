import React from 'react';
import userEvent from "@testing-library/user-event";


function SaveAndLoad(props) {

    function handleSave() {
        localStorage.setItem('MyItems', JSON.stringify(items))
    }

    const {items} = props




    console.log('last', items)

    function handleLoad() {
        localStorage.getItem('MyItems',   JSON.parse(items))
    }

    console.log(props)

    return (
        <div className='btn__position'>
            <button
                type="button"
                className="btn toggle-btn"
                aria-pressed="true"
                onClick={handleSave}
            >
                <span className="visually-hidden">Save </span>
            </button>
            <button
                type="button"
                className="btn toggle-btn"
                aria-pressed="true"
                onClick={handleLoad}
            >
                <span className="visually-hidden">Load </span>
            </button>
        </div>
    )
}

export default SaveAndLoad