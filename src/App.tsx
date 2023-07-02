import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {ComingSoonCounter} from "./components/ComingSoonCounter";
import {About} from "./components/About";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<ComingSoonCounter/>*/}
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
