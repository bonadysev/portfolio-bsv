import React from 'react';
import style from './Works.module.css';
import {Work} from "./work/Work";

export const Works = () => {
    return (
        <div className={style.worksBlock}>

            <div className={style.worksContainer}>
                <h2 className={style.title}>My works</h2>
                <div className={style.workArea}>
                    <Work title={'One'} title2={'description 1descript ption 1des cription 1descon 1description 1'} />
                    <Work title={'Two'} title2={'description 2'} />
                </div>
            </div>

        </div>
    );
};
