import React from 'react'
import Entry from './Entry';

function List(props) {
    // console.log(props)
    const { items, setItems } = props


    function toggleItemDone(id) {
        const updatedItems = items.map(item => {
            if (id === item.id) {
                return { ...item, completed: !item.completed }
            }
            return item;
        })
        setItems(updatedItems)
    }

    function deleteItem(id) {
        const remainingItem = items.filter(item => id !== item.id);
        setItems(remainingItem)
    }


    return (
        <ul
            className="list-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            {items.map(item => (
                <Entry
                    id={item.id}
                    name={item.name}
                    completed={item.completed}
                    key={item.id}
                    toggleItemDone={toggleItemDone}
                    deleteItem={deleteItem}
                />
            ))}
        </ul>

    );


}

export default List
