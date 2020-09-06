import React from 'react';
import {
    HelloWorld1,
    HelloWorld2,
    HelloWorld4,
    HelloWorld3
} from '../Helloworld/Helloworld';
import Header from '../Header/Header';
import InfoComponent from '../Info/InfoComponent';
import './App.css';

export default function App() {
    return (
        <React.StrictMode>
            <Header />
            <div className="container">
                <HelloWorld1 />
                <HelloWorld2 />
                {HelloWorld3}
                <HelloWorld4 />
                <InfoComponent />
            </div>
        </React.StrictMode>
    );
}
