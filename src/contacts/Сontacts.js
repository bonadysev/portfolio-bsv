import React from 'react';
import contact from "./Contacts.module.css"


export const Contacts = () => {
    return (
        <div className={contact.contactBlock}>
            <div className={contact.contactContainer}>
                <div className={contact.contactChild}>
                    <h2>Contacts</h2>
                </div>
                <div className={contact.form}>
                    <form>
                        <div><input type="text" name="username" placeholder="Инпут"/></div>
                        <br/>
                        <div><input type="text" name="password" placeholder="Инпут"/></div>
                        <br/>
                        <div><textarea name="text" placeholder="Текст сообщения"></textarea></div>
                    </form>
                </div>
                <button>Send</button>
            </div>
        </div>
);
};

