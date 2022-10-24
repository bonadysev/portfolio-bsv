import React from 'react';
import style from './Main.module.css';
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span>Hi</span>
                    <h1>My name is Sergey Bonadysev. I'm a Frontend Developer </h1>
                    <p>bonadysev@gmail.com</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
};

