import React from 'react';
import './App.css';


function Footer(props) {

    const add = () => {
        console.log('ADD TO CART')
        props.attempt('shark')
    }
        const remove = () => {
            console.log('REMOVE FROM CART')
    }

    const change = (e) => props.attempt(e.target.value)




    return (

        <div className='app-footer'>
            <ul>


            <button onClick={add}>ADD</button>
                <input type="text" onChange={change}/>

            <button onClick={remove}>REMOVE</button>



                <li>{props.content[0]}</li>
                <li>{props.content[1]}</li>
                <li>{props.content[2]}</li>

            </ul>
        </div>

    );
}

export default Footer;
