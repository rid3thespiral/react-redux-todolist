import React from 'react';


export default function todo({todo, onClick,id}){

    return (
        <li>{todo} <button onClick = {() => onClick(id) }>-</button></li>
    );

}
