import React from 'react';
import style from './Remote.module.css'

export const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={style.remoteContainer}>
                <div className={style.remoteChild}>
                    <h2>Consider remote work options</h2>
                </div>
                <button>Hire me</button>
            </div>
        </div>
    );
};

