import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {ComingSoonCounter} from "./components/ComingSoonCounter";

function App() {
    return (
        <div className="App">
            <Header/>
            <ComingSoonCounter/>
        </div>
    );
}

export default App;
