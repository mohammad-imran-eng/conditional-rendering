import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greetings;
    let food;
    let connection;
    // if (familiar) {
    //     greetings = <p>Welcome, my friend</p>
    //     food = <p>I will buy Food for you.</p>
    //     connection = <p>let's join my facebook</p>
    // }
    // else {
    //     greetings = <p>Who the hell are you?</p>
    //     food = <p>Lets eat his his whose whose?</p>
    //     connection = <p>I don't add stranger?</p>
    // }

    const greetings2 = familiar === true ? <p>Welcome, my friend</p> : greetings = <p>Who the hell are you?</p>
    const food2 = familiar === true ? food = <p>I will buy Food for you.</p> : food = <p>Lets eat his his whose whose?</p>
    const connection2 = familiar === true ? connection = <p>let's join my facebook</p> : connection = <p>I don't add stranger?</p>



    return (
        <div>
            <h2>Greetings</h2>
            <small>{greetings2}</small>
            <h2>Food</h2>
            <small>{food2}</small>
            <h2>Connection</h2>
            <small>{connection2}</small>
        </div>
    );
};

export default User;