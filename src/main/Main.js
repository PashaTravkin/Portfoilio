import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.greetings}>
                    <span>Hi There</span>
                    <h1>I am Pasha Traukin</h1>
                    <p>A frontend developer</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </div>
    );
};

export default Main;