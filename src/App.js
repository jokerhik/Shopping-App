import './App.css';
import Form from './components/Form';
import React, {useState, useEffect} from 'react'
import {nanoid} from 'nanoid';
import List from "./components/List";

// import SaveAndLoad from "./components/Save_and_Load";

function App(props) {

    const [items, setItems] = useState(() => {
        const myItems = localStorage.getItem('myItems');

        return myItems !== null ? JSON.parse(myItems) : props.items;
    });

    useEffect(() => {
        localStorage.setItem('myItems', JSON.stringify(items))
    }, [items]);

    function addItem(name) {
        const newItem = {id: 'item-' + nanoid(), name: name, completed: false}
        if(newItem.name.length !== 0){
            setItems([...items, newItem]);
        }else {
            window.alert('Bitte geben sie ein Item ein')
        }
        // return null
    }


    return (


        <div className="listapp stack-large" data-testid="test">
            <h1>Shoppinglist</h1>
            <Form addItem={addItem}/>
            {/*<SaveAndLoad items={items}/>*/}

            <List
                items={items}
                setItems={setItems}
            />

            {console.log(items)}


        </div>
    );
}

export default App;
