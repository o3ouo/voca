import React, {useState} from 'react';

export default function State() {

    const [name, setName] = useState('Jeong');

    function changeName() {
        const newName = name === 'Jeong' ? 'Hyuk' : 'Jeong';
        setName(newName);
    };

    return (
        <div>
            <h1>useState</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>ChangeName</button>
        </div>
    );
}

/*********************************************************************************************
** useState **
*********************************************************************************************/
