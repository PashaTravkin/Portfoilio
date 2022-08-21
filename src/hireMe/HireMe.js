import React from 'react';
import s from './HireMe.module.css'
const HireMe = () => {
    return (
        <div className={s.HireMe}>
            <div className={s.container}>
                <h2 className={s.title}>Considering remote work options</h2>
                <div>
                    <button className={s.button}>Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default HireMe;