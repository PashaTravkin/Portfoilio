import React from 'react';
import s from './MyWorks.module.css'
import Work from "./work/Work";

const Works = () => {
    return (
        <div className={s.works}>
            <div className={s.container}>
                <h2 className={s.title}>My works</h2>
                <div className={s.containerForWorks}>
                    <Work title={'Todolist'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Work title={'Counter'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam?'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;