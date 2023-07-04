import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {ComingSoonCounter} from "./components/ComingSoonCounter";
import {About} from "./components/About";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App flex flex-col justify-between h-screen">
            <Header/>
            {/*<ComingSoonCounter/>*/}
            <section className="mx-10 lg:mx-40 flex justify-center"><About/></section>
            <Footer/>
        </div>
    );
}

export default App;
