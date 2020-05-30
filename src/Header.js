import React from 'react';
import './App.css';

function Header(props) {


    return (

        <div className='app-header'>


            <h1> Welcome to my page </h1>
            <ul>

                <li key='1'>{props.topMenu[0]}</li>
                <li key='2'>{props.topMenu[1]}</li>
                <li key='3'>{props.topMenu[2]}</li>





            </ul>

            <hr/>



            {props.topMenu.map(el => <li>{el}</li>)}


        </div>
    );
}

export default Header;
