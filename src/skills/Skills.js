import React from 'react';
import s from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skills}>
            <div className={s.container}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.containerForSkills}>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet.'}/>
                    <Skill title={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing.'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti!'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;