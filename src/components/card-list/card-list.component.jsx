import React from "react";
import './card-list.styles.css'


export let CardList = (props) => {
    return <div className='card-list' >
        {props.children}
    </div >

}
