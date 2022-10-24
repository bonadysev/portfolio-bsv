import React from 'react';
import footer from "../Footer/Footer.module.css"


export const Footer = () => {
    return (
        <div className={footer.wrap}>
            <div className={footer.wrap2}>
                <div className={footer.contactChild}>
                    <h2>Sergey Bonadysev</h2>
                </div>
                <div className={footer.container}>
                    <div className={footer.item}>1</div>
                    <div className={footer.item}>2</div>
                    <div className={footer.item}>3</div>
                    <div className={footer.item}>4</div>
                </div>
                <div className={footer.contactChild}>
                    <h3>Все права защищены</h3>
                </div>
            </div>

        </div>
    );
};

