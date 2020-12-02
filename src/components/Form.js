import React, { useState } from 'react'

function Form(props) {
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        props.addItem(name);
        setName('');
    }

    function handleChange(e) {
        setName(e.target.value)
    }



    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                id="new-items-input"
                data-testid='new-items-input'
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg" data-testid='addButton'>
                Add
            </button>
        </form>
    )
}

export default Form
