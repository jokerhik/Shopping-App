import React from 'react'

function Entry(props) {
    return (
        <li className="list stack-smale">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleItemDone(props.id)}
                />
                <label className="list-label" htmlFor="list-0">
                    {props.name}
                </label>
                <button
                    type="button"

                    className="btn btn__danger"
                    onClick={() => props.deleteItem(props.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default Entry

