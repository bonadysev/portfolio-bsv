import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skils/Skills";
import {Works} from "./works/Works";
import {Remote} from "./remote/Remote";
import {Contacts} from "./contacts/Сontacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    );
}



export default App;
