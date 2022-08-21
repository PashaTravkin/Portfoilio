import React from 'react';
import s from './Work.module.css'

const Work = (props) => {
    return (
        <div className={s.work}>
            <div className={s.icon}><button className={s.button} >Watch</button></div>
            <div className={s.titleDesc}>
                <div className={s.title}>{props.title}</div>
                <span className={s.description}>{props.description}</span>
            </div>

        </div>
    );
};

export default Work;