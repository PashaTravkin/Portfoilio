import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h2 className={s.title}>Contacts</h2>
                <form id={'form'} action="URL" className={s.form}>
                    <input placeholder={'your Telegram or another messengers '} type="text"/>
                    <input placeholder={'your email'} type="text"/>
                    <textarea placeholder={'enter your preposition'} cols="30" rows="10"></textarea>
                </form>
                <button form={'form'} className={s.button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;