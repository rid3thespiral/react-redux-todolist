import React from 'react';


export default function todo({todoItem, onClick,id}){

    return (
        <li onClick={() => onClick(id) }><span></span>
            {todoItem.todo} </li>
    );

}
