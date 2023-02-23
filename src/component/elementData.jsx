import React from 'react'

export default function ElementData(props){
    return(
        <div>
            <li>
                <ul>{props.atomicNumber}</ul>
                <ul>{props.electronicConfiguration}</ul>
            </li>
        </div>
    )
}