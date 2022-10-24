import React from 'react';
import style from './Work.module.css'

export const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.icon}>
                <button>Look</button>
            </div>

            <div className={style.workText}>
                <h3>{props.title}</h3>
                <h2>{props.title2}</h2>
            </div>
        </div>
    );
};
